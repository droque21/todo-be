import { User } from "../../domain/entities/user";
import { UserRepositoryDB } from "../../infrastructure/database/interfaces/user.repositoryDB.interface";
import { UserRepository, userRepositoryGenerator } from "../interfaces/user.repository.interface";


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

