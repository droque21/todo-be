import express, { Request, Response } from 'express';
import * as UserUseCase from '../domain/entities/user.use-case';

export const UserRouter = (
  findUserByEmailUseCase: UserUseCase.FindUserByEmailUseCase,
  findUserByUsernameUseCase: UserUseCase.FindUserByUsernameUseCase,
  saveUserUseCase: UserUseCase.SaveUserUseCase,
  updateUserUseCase: UserUseCase.UpdateUserUseCase,
  deleteUserUseCase: UserUseCase.DeleteUserUseCase
) => {
  const router = express.Router();

  router.get('/email/:email', async (req: Request, res: Response) => {
    const email = req.params.email;
    try {
      const user = await findUserByEmailUseCase.execute(email);
      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ message: "", error });
    }
  });

  router.get('/username/:username', async (req: Request, res: Response) => {
    const username = req.params.username;
    try {
      const user = await findUserByUsernameUseCase.execute(username);
      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ message: "", error });
    }
  });

  router.post('/', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
      const user = await saveUserUseCase.execute({ username, email, password });
      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ message: "", error });
    }
  });

  router.put('/', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
      const user = await updateUserUseCase.execute({ username, email, password });
      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ message: "", error });
    }
  });

  router.delete('/', async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      await deleteUserUseCase.execute(id);
      res.status(200).send({ message: "User deleted" });
    } catch (error) {
      res.status(500).send({ message: "", error });
    }
  });

  return router;
}