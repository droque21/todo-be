import { User } from "./user.entity";

export interface UserRepository {
  getUserByUsername(username: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}