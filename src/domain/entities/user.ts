import { Task } from "./task";

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

export interface AuthUser {
  token: string;
}