import { AuthUser, User } from "../../../domain/entities/user";
import { generateCustomError } from "../../../infrastructure/webserver/helpers/error";
import { UserRepository } from "../../repositories/user.repository";
import { AuthServiceRepository } from "../../repositories/authService.repository";

export const loginUser = async (user: User, userRepository: UserRepository, authRepository: AuthServiceRepository): Promise<AuthUser> => {
  if (!user.username || !user.password) {
    generateCustomError(401, "You must provide a username and password");
  }

  let userDB: User;
  userDB = await userRepository.getUserByEmail(user.email);

  if (!userDB) {
    userDB = await userRepository.getUserByUsername(user.username);
  }

  if (!userDB) {
    generateCustomError(401, "User or password incorrect");
  }

  const isPasswordValid = authRepository.comparePassword(user.password!, userDB.password!);
  if (!isPasswordValid) {
    generateCustomError(401, "User or password incorrect");
  }
  const loggedUser = JSON.parse(JSON.stringify(userDB)) as User;

  const userToken: AuthUser = {
    token: authRepository.generateToken(loggedUser)
  }
  return userToken;
}