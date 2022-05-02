import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/entities/user.repository";
import { SaveUserUseCase } from "../../domain/entities/user.use-case";

export class SaveUser implements SaveUserUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(user: User): Promise<User> {
    const result = await this.userRepository.save(user)
    return result
  }
}