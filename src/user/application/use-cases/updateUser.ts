import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/entities/user.repository";
import { UpdateUserUseCase } from "../../domain/entities/user.use-case";

export class UpdateUser implements UpdateUserUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(user: User): Promise<User> {
    const result = await this.userRepository.update(user)
    return result
  }
}