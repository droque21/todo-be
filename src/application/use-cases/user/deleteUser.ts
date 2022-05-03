import { UserRepository } from "../../repositories/user.repository";
import { AuthServiceRepository } from "../../services/authService";

export const deleteUser = async (id: string, userRepository: UserRepository, authRepository: AuthServiceRepository): Promise<void> => {
  await userRepository.deleteUser(id);
}