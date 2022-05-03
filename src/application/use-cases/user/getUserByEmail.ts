import { User } from "../../../domain/entities/user"
import { UserRepository } from "../../repositories/user.repository"


export const getUserByEmail = async (email: string, userRepository: UserRepository): Promise<User> => {
  const result = await userRepository.getUserByEmail(email)
  return result
}