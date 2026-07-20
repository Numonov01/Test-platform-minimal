// ----------------------------------------------------------------------

export type IJobFilterValue = string | string[];

export type IJobFilters = {
  roles: string[];
  locations: string[];
  benefits: string[];
  experience: string;
  employmentTypes: string[];
};

// ----------------------------------------------------------------------

export type IJobSalary = {
  type: string;
  price: number;
  negotiable: boolean;
};

export type IJobCompany = {
  name: string;
  logo: string;
  phoneNumber: string;
  fullAddress: string;
};

export type IJobCandidate = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};

export type IJobItem = {
  id: string;
  role: string;
  title: string;
  content: string;
  publish: string;
  createdAt: Date;
  salary: IJobSalary;
  company: IJobCompany;
  expiredDate: Date;
  experience: string;
  skills: string[];
  benefits: string[];
  locations?: string[];
  workingSchedule?: string[];
  employmentTypes: string[];
  candidates: IJobCandidate[];
};
