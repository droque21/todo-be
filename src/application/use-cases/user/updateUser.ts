import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../repositories/user.repository";

export const updateUser = async (user: User, userRepository: UserRepository): Promise<User> => {
  const result = await userRepository.updateUser(user);
  return result;
}