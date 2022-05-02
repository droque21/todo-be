import { User } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/entities/user.repository";

export class MockUserRepository implements UserRepository {
  getUserByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getUserByUsername(username: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  save(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}