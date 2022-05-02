import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/entities/user.repository";
import { FindUserByEmailUseCase } from "../../domain/entities/user.use-case";

export class GetUserByEmail implements FindUserByEmailUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(email: string): Promise<User> {
    const result = await this.userRepository.getUserByEmail(email)
    return result
  }
}