import { User } from "../../domain/entities/user";
import { UserRepositoryDB } from "../../infrastructure/database/interfaces/user.repositoryDB.interface";

export interface UserRepository {
  getUserByUsername(username: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  saveUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<boolean>;
}

export type userRepositoryGenerator = (userRepositoryDB: UserRepositoryDB) => UserRepository;
