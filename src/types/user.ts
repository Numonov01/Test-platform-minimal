export interface IUserItem {
  id: string;
  email: string;
  phone: string;
  avatar: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  age: number;
  role: string;
  gender: 'male' | 'female';
  status: 'active' | 'inactive' | 'pending' | 'banned';
}

export interface IAthleteItem {
  id: string;
  email: string;
  phone: string;
  avatar: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  age: number;
  height: number;
  weight: number;
  armLength: number;
  legLength: number;
  role: string;
  isVerified?: boolean;
  gender: 'male' | 'female';
  status: 'active' | 'inactive' | 'pending' | 'banned';
}

export type IAthleteCard = {
  id: string;
  name: string;
  role: string;
  coverUrl: string;
  avatarUrl: string;
  // totalPosts: number;
  // totalFollowers: number;
  // totalFollowing: number;
  recordsHeld: number;
  olympicMedals: number;
  worldChampionships: number;
};

export type ITrainerProfileCover = {
  name: string;
  role: string;
  coverUrl: string;
  avatarUrl: string;
};
