import { User } from "../../../domain/entities/user";
import { generateCustomError } from "../../../infrastructure/webserver/helpers/error";;
import { UserRepository } from "../../interfaces/user.repository.interface";
import { AuthServiceRepository } from "../../services/authService";

export const saveUser = async (user: User, userRepository: UserRepository, authRepository: AuthServiceRepository): Promise<User> => {
  if (!user.email || !user.username || !user.password)
    generateCustomError(400, "User must have email, username and password");

  const erros: string[] = []

  const emailExists = Boolean(await userRepository.getUserByEmail(user.email));
  if (emailExists) erros.push("Email already exists");

  const usernameExists = Boolean(await userRepository.getUserByUsername(user.username));
  if (usernameExists) erros.push("Username already exists");

  const passwordIsInValid = user.password!.length <= 7;
  if (passwordIsInValid) erros.push("Passowrd must be at least 8 characters long");

  if (erros.length > 0) generateCustomError(400, "User must have email, username and password", erros);

  const newUser: User = {
    ...user,
    active: false,
    password: authRepository.encryptPassword(user.password!),
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    createdBy: "system",
    updatedBy: "system",
  }


  const result = await userRepository.saveUser(newUser);
  return result;
}