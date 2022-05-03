import { User } from "../../domain/entities/user";
import { UserRepositoryDB } from "../../infrastructure/interfaces/repositoriesDB/user/user.repositoryDB";

export interface UserRepository {
  getUserByUsername(username: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  saveUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}

export type userRepositoryGenerator = (userRepositoryDB: UserRepositoryDB) => UserRepository;

export const userRepository: userRepositoryGenerator = (repositoryImpl: UserRepositoryDB): UserRepository => {
  const getUserByUsername = async (username: string) => await repositoryImpl.getUserByUsername(username);
  const getUserByEmail = async (email: string) => await repositoryImpl.getUserByEmail(email);
  const saveUser = async (user: User) => await repositoryImpl.saveUser(user);
  const updateUser = async (user: User) => await repositoryImpl.updateUser(user);
  const deleteUser = async (id: string) => await repositoryImpl.deleteUser(id);

  return {
    getUserByUsername,
    getUserByEmail,
    saveUser,
    updateUser,
    deleteUser
  }
}

