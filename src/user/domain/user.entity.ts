export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  createdAt?: number;
  updatedAt?: number;
  createdBy?: string;
  updatedBy?: string;
}