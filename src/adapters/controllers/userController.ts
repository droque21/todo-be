import { User } from "../../domain/entities/user";
import { AuthServiceRepository } from "../../application/repositories/authService.repository";
import * as UserUseCase from "../../application/use-cases/user";
import { RequestCustom, RequestWithUser } from "../../infrastructure/webserver/interfaces/express";
import { UserRepository } from "../../application/repositories/user.repository";

export const userController = (
  userRepository: UserRepository,
  authServiceRepository: AuthServiceRepository,
) => {

  const fetchUserByUsername = async (req: RequestWithUser, res: any, next: any) => {
    try {
      const username = req.params.username
      const user = await UserUseCase.getUserByUsername(username, userRepository)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }

  const fetchUserByEmail = async (req: RequestWithUser, res: any, next: any) => {
    try {
      const email = req.params.email
      const user = await UserUseCase.getUserByEmail(email, userRepository)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }

  const saveUser = async (req: RequestCustom<User>, res: any, next: any) => {
    try {
      const user = req.body
      const savedUser = await UserUseCase.saveUser(user, userRepository, authServiceRepository)
      res.json(savedUser)
    } catch (error) {
      next(error)
    }
  }

  const updateUser = async (req: RequestCustom<User>, res: any, next: any) => {
    try {
      const user = req.body as User
      const updatedUser = await UserUseCase.updateUser(user, userRepository, authServiceRepository)
      res.json(updatedUser)
    } catch (error) {
      next(error)
    }
  }

  const loginUser = async (req: RequestCustom<User>, res: any, next: any) => {
    try {
      const user = req.body
      const token = await UserUseCase.loginUser(user, userRepository, authServiceRepository)
      res.json(token)
    } catch (error) {
      next(error)
    }
  }

  return {
    fetchUserByUsername,
    fetchUserByEmail,
    saveUser,
    updateUser,
    loginUser
  }
}