import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/entities/user.repository";
import { FindUserByUsernameUseCase } from "../../domain/entities/user.use-case";

export class GetUserByUsername implements FindUserByUsernameUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(username: string): Promise<User> {
    const result = await this.userRepository.getUserByUsername(username)
    return result
  }
}