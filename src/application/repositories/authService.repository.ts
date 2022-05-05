import { User } from "../../domain/entities/user";
export interface AuthServiceRepository {
  encryptPassword(password: string): string;
  comparePassword(password: string, hash: string): boolean;
  verifyToken(token: string): User;
  generateToken(user: User): string;
}