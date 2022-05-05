import { User } from "../../../domain/entities/user";
import { generateCustomError } from "../../../infrastructure/webserver/helpers/error";
import { UserRepository } from "../../repositories/user.repository";

export const getUserByUsername = async (username: string, userRepository: UserRepository): Promise<User> => {
  const result = await userRepository.getUserByUsername(username);
  if (!result) generateCustomError(404, "User not found")
  return result;
}