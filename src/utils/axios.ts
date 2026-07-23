import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

import axios from 'axios';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from 'src/auth/context/jwt/constant';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CONFIG.site.serverUrl || 'http://localhost:3001' });

const isBrowser = typeof window !== 'undefined';

type RetryableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

const clearStoredSession = () => {
  if (!isBrowser) return;

  sessionStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
  delete axiosInstance.defaults.headers.common.Authorization;
};

const createApiError = (error: unknown) => {
  const responseData = (error as any)?.response?.data;

  if (responseData && typeof responseData === 'object') {
    const err = new Error(
      (responseData as Record<string, any>).message || 'Request failed. Please try again.'
    ) as Error & Record<string, any>;

    Object.assign(err, responseData);

    return err;
  }

  if (error instanceof Error) {
    return error;
  }

  return new Error('Something went wrong!');
};

const extractTokens = (payload: any) => {
  const data = payload?.data ?? payload;

  return {
    accessToken: data?.accessToken ?? data?.access_token ?? null,
    refreshToken: data?.refreshToken ?? data?.refresh_token ?? null,
  };
};

let refreshPromise: Promise<string | null> | null = null;

const refreshAccessToken = async (): Promise<string | null> => {
  if (!isBrowser) return null;

  const refreshToken = sessionStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

  if (!refreshToken) {
    return null;
  }

  const res = await axios.post(
    endpoints.auth.refresh,
    { refreshToken },
    { baseURL: CONFIG.site.serverUrl || 'http://localhost:3001' }
  );

  const payload = res.data;

  if (payload?.success === false) {
    throw createApiError({ response: { data: payload } });
  }

  const tokens = extractTokens(payload);

  if (!tokens.accessToken) {
    throw new Error('Refresh response did not include access token.');
  }

  sessionStorage.setItem(STORAGE_KEY, tokens.accessToken);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${tokens.accessToken}`;

  if (tokens.refreshToken) {
    sessionStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, tokens.refreshToken);
  }

  return tokens.accessToken;
};

axiosInstance.interceptors.request.use((config) => {
  if (!isBrowser) return config;

  const token = sessionStorage.getItem(STORAGE_KEY);

  if (token) {
    config.headers = config.headers || {};

    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;
    const originalConfig = error?.config as RetryableConfig | undefined;
    const requestUrl: string = originalConfig?.url ?? '';

    const isRefreshRequest = requestUrl.includes(endpoints.auth.refresh);

    if (status === 401 && originalConfig && !originalConfig._retry && !isRefreshRequest) {
      originalConfig._retry = true;

      try {
        refreshPromise = refreshPromise ?? refreshAccessToken();

        const newAccessToken = await refreshPromise;

        if (!newAccessToken) {
          throw new Error('Unable to refresh session.');
        }

        originalConfig.headers = originalConfig.headers || {};
        originalConfig.headers.Authorization = `Bearer ${newAccessToken}`;

        return await axiosInstance(originalConfig);
      } catch (refreshError) {
        clearStoredSession();

        if (isBrowser && window.location.pathname !== paths.auth.jwt.signIn) {
          window.location.href = paths.auth.jwt.signIn;
        }

        return await Promise.reject(createApiError(refreshError));
      } finally {
        refreshPromise = null;
      }
    }

    return Promise.reject(createApiError(error));
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  root: '/api',
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    browserLogin: '/api/auth/browser/login',
    telegramLogin: '/api/auth/telegram/login',
    refresh: '/api/auth/refresh',
    logout: '/api/auth/logout',
    logoutAll: '/api/auth/logout-all',
  },
  users: {
    me: '/api/users/me',
  },
  telegram: {
    browserPasswordCreate: '/api/telegram/browser-password/create',
    browserPasswordChange: '/api/telegram/browser-password/change',
    browserPasswordForgot: '/api/telegram/browser-password/forgot',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
};
