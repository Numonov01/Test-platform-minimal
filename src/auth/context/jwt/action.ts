import axios, { endpoints } from 'src/utils/axios';

import { setSession } from './utils';
import { REFRESH_TOKEN_STORAGE_KEY } from './constant';

// ----------------------------------------------------------------------

export type SignInParams = {
  username: string;
  password: string;
};

export type TelegramSignInParams = {
  initData: string;
};

export type TelegramBrowserPasswordCreateParams = {
  telegramInitData: string;
  password: string;
  confirmPassword: string;
};

export type TelegramBrowserPasswordChangeParams = {
  telegramInitData: string;
  newPassword: string;
  confirmPassword: string;
};

type ContractResponse<T = Record<string, any>> = {
  success: boolean;
  message?: string;
  data?: T;
  errorCode?: string;
};

const getError = (payload: ContractResponse) => {
  const error = new Error(payload?.message || 'Request failed') as Error & {
    errorCode?: string;
  };

  error.errorCode = payload?.errorCode;

  return error;
};

const readTokens = (payload: ContractResponse<any>) => {
  const data = payload?.data ?? {};

  const accessToken = data?.accessToken ?? data?.access_token;
  const refreshToken = data?.refreshToken ?? data?.refresh_token;

  if (!accessToken || !refreshToken) {
    throw new Error('Login response did not include required tokens.');
  }

  return { accessToken, refreshToken };
};

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ username, password }: SignInParams): Promise<void> => {
  try {
    const params = { username, password };

    const res = await axios.post<ContractResponse>(endpoints.auth.browserLogin, params);

    if (!res.data?.success) {
      throw getError(res.data);
    }

    const { accessToken, refreshToken } = readTokens(res.data);

    await setSession(accessToken, refreshToken);
  } catch (error) {
    console.error('Error during browser sign in:', error);
    throw error;
  }
};

/** **************************************
 * Telegram sign in
 *************************************** */
export const signInWithTelegram = async ({ initData }: TelegramSignInParams): Promise<void> => {
  try {
    const res = await axios.post<ContractResponse>(endpoints.auth.telegramLogin, { initData });

    if (!res.data?.success) {
      throw getError(res.data);
    }

    const { accessToken, refreshToken } = readTokens(res.data);

    await setSession(accessToken, refreshToken);
  } catch (error) {
    console.error('Error during telegram sign in:', error);
    throw error;
  }
};

/** **************************************
 * Telegram browser password create
 *************************************** */
export const createTelegramBrowserPassword = async ({
  telegramInitData,
  password,
  confirmPassword,
}: TelegramBrowserPasswordCreateParams): Promise<void> => {
  const params = {
    telegramInitData,
    password,
    confirmPassword,
  };

  try {
    const res = await axios.post<ContractResponse>(
      endpoints.telegram.browserPasswordCreate,
      params
    );

    if (!res.data?.success) {
      throw getError(res.data);
    }
  } catch (error) {
    console.error('Error during telegram browser password create:', error);
    throw error;
  }
};

/** **************************************
 * Telegram browser password change
 *************************************** */
export const changeTelegramBrowserPassword = async ({
  telegramInitData,
  newPassword,
  confirmPassword,
}: TelegramBrowserPasswordChangeParams): Promise<void> => {
  const params = {
    telegramInitData,
    newPassword,
    confirmPassword,
  };

  try {
    const res = await axios.post<ContractResponse>(
      endpoints.telegram.browserPasswordChange,
      params
    );

    if (!res.data?.success) {
      throw getError(res.data);
    }
  } catch (error) {
    console.error('Error during telegram browser password change:', error);
    throw error;
  }
};

/** **************************************
 * Telegram browser password forgot
 *************************************** */
export const forgotTelegramBrowserPassword = async (): Promise<void> => {
  try {
    const res = await axios.post<ContractResponse>(endpoints.telegram.browserPasswordForgot);

    if (!res.data?.success) {
      throw getError(res.data);
    }
  } catch (error) {
    console.error('Error during telegram browser password forgot:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async (): Promise<void> => {
  const refreshToken = sessionStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

  try {
    if (refreshToken) {
      await axios.post<ContractResponse>(endpoints.auth.logout, { refreshToken });
    }
  } catch (error) {
    console.error('Error during sign out:', error);
  } finally {
    await setSession(null, null);
  }
};

/** **************************************
 * Sign out all devices
 *************************************** */
export const signOutAll = async (): Promise<void> => {
  try {
    const res = await axios.post<ContractResponse>(endpoints.auth.logoutAll);

    if (!res.data?.success) {
      throw getError(res.data);
    }
  } catch (error) {
    console.error('Error during sign out all:', error);
    throw error;
  } finally {
    await setSession(null, null);
  }
};
