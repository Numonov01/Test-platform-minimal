// ----------------------------------------------------------------------

export type IOrientationFilterValue = string | string[];

export type IOrientationFilters = {
  roles: string[];
  locations: string[];
  benefits: string[];
  level: string;
  orientationTypes: string[];
};

// ----------------------------------------------------------------------

export type IOrientationDuration = {
  type: string;
  value: number;
};

export type IOrientationCompany = {
  name: string;
  logo: string;
  phoneNumber: string;
  fullAddress: string;
};

export type IOrientationParticipant = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};

export type IOrientationItem = {
  id: string;
  role: string;
  title: string;
  content: string;
  publish: string;
  createdAt: Date | string;
  duration: IOrientationDuration;
  company: IOrientationCompany;
  startDate: Date | string;
  level: string;
  skills: string[];
  benefits: string[];
  locations?: string[];
  schedule?: string[];
  orientationTypes: string[];
  participants: IOrientationParticipant[];
  totalViews?: number;
};
