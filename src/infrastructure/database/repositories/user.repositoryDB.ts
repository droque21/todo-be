import { UserRepository } from '../../../application/repositories/user.repository';
import { User } from '../../../domain/entities/user';
import UserModel from '../models/user.model';

export const userRepositoryDB = (): UserRepository => {

  const getUserByUsername = async (username: string) => {
    const result = await UserModel.findOne({ username });
    return result as User;
  };

  const getUserByEmail = async (email: string) => {
    const result = await UserModel.findOne({ email });
    return result as User;
  };

  const saveUser = async (user: User) => {
    const result = await UserModel.create(user);
    return result as User;
  };

  const updateUser = async (user: User) => {
    const result = await UserModel.findOneAndUpdate({ username: user.username }, user, { new: true });
    return result as User;
  };

  return {
    getUserByUsername,
    getUserByEmail,
    saveUser,
    updateUser,
  };
}
