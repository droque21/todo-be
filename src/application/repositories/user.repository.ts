import { User } from "../../domain/entities/user";
export interface UserRepository {
  getUserByUsername(username: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  saveUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
}
