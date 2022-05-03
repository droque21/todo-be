import { User } from "../../../domain/entities/user"
import { generateCustomError } from "../../../infrastructure/webserver/middlewares/errorHandlingMiddleware"
import { UserRepository } from "../../repositories/user.repository"


export const getUserByEmail = async (email: string, userRepository: UserRepository): Promise<User> => {
  const result = await userRepository.getUserByEmail(email)
  if (!result) generateCustomError(404, "User not found")
  return result
}