export interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  active?: boolean;
  createdAt?: number;
  updatedAt?: number;
  createdBy?: string;
  updatedBy?: string;
}