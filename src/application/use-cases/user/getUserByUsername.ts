import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../repositories/user.repository";

export const getUserByUsername = async (username: string, userRepository: UserRepository): Promise<User> => {
  const result = await userRepository.getUserByUsername(username);
  return result;
}