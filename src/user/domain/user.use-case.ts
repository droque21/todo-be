import { User } from "./user.entity";

export interface FindUserByEmail {
  execute(email: string): Promise<User>;
}

export interface FindUserByUsername {
  execute(username: string): Promise<User>;
}

export interface SaveUser {
  execute(user: User): Promise<User>;
}

export interface UpdateUser {
  execute(user: User): Promise<User>;
}

export interface DeleteUser {
  execute(id: string): Promise<void>;
}