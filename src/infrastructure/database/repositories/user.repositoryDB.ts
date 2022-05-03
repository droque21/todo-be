import { userRepositoryGenerator } from '../../../application/repositories/user.repository';
import { User } from '../../../domain/entities/user';
import { userRepositoryDBGenerator } from '../../interfaces/repositoriesDB/user/user.repositoryDB';
import UserModel from '../models/user.model';

// move it to a proper place
function omit(obj, ...props) {
  const result = { ...obj };
  props.forEach((prop) => delete result[prop]);
  return result;
}

export const userRepositoryDB: userRepositoryDBGenerator = () => {
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
    const result = await UserModel.findOneAndUpdate({ _id: user.id }, user, { new: true });
    return result as User;
  };
  const deleteUser = async (id: string) => {
    await UserModel.findOneAndDelete({ _id: id });
  };

  return {
    getUserByUsername,
    getUserByEmail,
    saveUser,
    updateUser,
    deleteUser,
  };
}
