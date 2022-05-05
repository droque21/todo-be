import { User } from "../../../domain/entities/user";
import { AuthServiceRepository } from "../../repositories/authService.repository";
import { UserRepository } from "../../repositories/user.repository";

export const updateUser = async (user: User, userRepository: UserRepository, authServiceRepository: AuthServiceRepository): Promise<User> => {

  if (!user.username) throw new Error("Username is required");

  const cleanUser = deleteEmptyProperties(user);

  if (cleanUser.password) cleanUser.password = authServiceRepository.encryptPassword(cleanUser.password);

  const result = await userRepository.updateUser(cleanUser);
  return result;
}

const deleteEmptyProperties = (user: User): User => {
  Object.keys(user).forEach(key => {
    if (!user[key]) delete user[key];
  })
  delete user.id;
  return user;
}