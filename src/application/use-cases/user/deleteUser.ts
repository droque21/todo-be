import { generateCustomError } from "../../../infrastructure/webserver/helpers/error";
import { UserRepository } from "../../interfaces/user.repository.interface";
import { AuthServiceRepository } from "../../services/authService";

export const deleteUser = async (id: string, userRepository: UserRepository, authRepository: AuthServiceRepository): Promise<boolean> => {
  const result = await userRepository.deleteUser(id);
  if (!result) generateCustomError(404, "User not found")
  return result;
}