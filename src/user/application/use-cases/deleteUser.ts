import { UserRepository } from "../../domain/entities/user.repository";
import { DeleteUserUseCase } from "../../domain/entities/user.use-case";

export class DeleteUser implements DeleteUserUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(id: string): Promise<void> {
    const result = await this.userRepository.delete(id)
  }
}