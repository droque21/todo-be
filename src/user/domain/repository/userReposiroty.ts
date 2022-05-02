import { UserDataSource } from "../../infrastructure/user.data-source";
import { User } from "../entities/user.entity";
import { UserRepository } from "../entities/user.repository";

export class UserRepositoryImpl implements UserRepository {
  userDataSource: UserDataSource
  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource
  }

  async getUserByUsername(username: string): Promise<User> {
    const result = await this.userDataSource.getUserByUsername(username)
    return result
  }
  async getUserByEmail(email: string): Promise<User> {
    const result = await this.userDataSource.getUserByEmail(email)
    return result
  }
  async save(user: User): Promise<User> {
    const result = await this.userDataSource.save(user)
    return result
  }
  async update(user: User): Promise<User> {
    const result = await this.userDataSource.update(user)
    return result
  }
  async delete(id: string): Promise<void> {
    await this.userDataSource.delete(id)
  }
}