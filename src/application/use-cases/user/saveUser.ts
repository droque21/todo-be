import { User } from "../../../domain/entities/user";
import { generateCustomError } from "../../../infrastructure/webserver/middlewares/errorHandlingMiddleware";
import { UserRepository } from "../../repositories/user.repository";
import { AuthServiceRepository } from "../../services/authService";

export const saveUser = async (user: User, userRepository: UserRepository, authRepository: AuthServiceRepository): Promise<User> => {
  if (!user.email || !user.username || !user.password) {
    throw new Error("User must have email, username and password");
  }


  const emailExists = Boolean(await userRepository.getUserByEmail(user.email));
  if (emailExists) generateCustomError(400, "Email already exists");

  const usernameExists = Boolean(await userRepository.getUserByUsername(user.username));
  if (usernameExists) generateCustomError(400, "Username already exists");

  const passwordIsValid = user.password.length >= 8;
  if (passwordIsValid) generateCustomError(400, "Passowrd must be at least 8 characters long");

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
}