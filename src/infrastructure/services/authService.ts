import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../../config';
import { User } from '../../domain/entities/user';
import { AuthServiceRepository } from '../../application/repositories/authService.repository';

export const authServiceImpl = (): AuthServiceRepository => {
  const encryptPassword = (password: string) => bcrypt.hashSync(password, 10);

  const comparePassword = (password: string, hash: string) => bcrypt.compareSync(password, hash);;

  const verifyToken = (token: string) => jwt.verify(token, config.jwtSecret);

  const generateToken = (user: User) => jwt.sign(user, config.jwtSecret, { expiresIn: '1d' });

  return {
    encryptPassword,
    comparePassword,
    verifyToken,
    generateToken
  }
}