import { User } from "../../domain/entities/user";


export interface AuthServiceRepository {
  encryptPassword(password: string): string;
  comparePassword(password: string, hash: string): boolean;
  verifyToken(token: string): User;
  generateToken(user: User): string;
}

interface AuthServiceImplementation {
  encryptPassword(password: string): string;
  comparePassword(password: string, hash: string): boolean;
  verifyToken(token: string): User;
  generateToken(user: User): string;
}

export type AuthServiceRepositoryGenerator = (authServiceImpl: AuthServiceImplementation) => AuthServiceRepository;
export type AuthServiceImplementationGenerator = () => AuthServiceImplementation;

export const authServiceRepository: AuthServiceRepositoryGenerator = (service): AuthServiceRepository => {
  const encryptPassword = (password: string) => service.encryptPassword(password);

  const comparePassword = (password: string, hash: string) => service.comparePassword(password, hash);

  const verifyToken = (token: string) => service.verifyToken(token);

  const generateToken = (user: User) => service.generateToken(user);

  return {
    encryptPassword,
    comparePassword,
    verifyToken,
    generateToken
  }
}