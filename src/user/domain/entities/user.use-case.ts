import { User } from "./user.entity";

export interface FindUserByEmailUseCase {
  execute(email: string): Promise<User>;
}

export interface FindUserByUsernameUseCase {
  execute(username: string): Promise<User>;
}

export interface SaveUserUseCase {
  execute(user: User): Promise<User>;
}

export interface UpdateUserUseCase {
  execute(user: User): Promise<User>;
}

export interface DeleteUserUseCase {
  execute(id: string): Promise<void>;
}