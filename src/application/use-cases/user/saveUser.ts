import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../repositories/user.repository";
import { AuthServiceRepository } from "../../services/authService";

export const saveUser = async (user: User, userRepository: UserRepository, authRepository: AuthServiceRepository): Promise<User> => {
  if (!user.email || !user.username || !user.password) {
    throw new Error("User must have email, username and password");
  }

  try {
    const newUser: User = {
      ...user,
      active: false,
      password: authRepository.encryptPassword(user.password),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      createdBy: "system",
      updatedBy: "system",
    }

    const result = await userRepository.saveUser(newUser);
    return result;
  } catch (error) {
    throw new Error("User already exists");
  }
}