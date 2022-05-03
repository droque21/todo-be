import { User } from "../../domain/entities/user";
import { AuthServiceImplementationGenerator, AuthServiceRepositoryGenerator } from "../../application/services/authService";
import * as UserUseCase from "../../application/use-cases/user";
import { RequestCustom, RequestWithUser } from "../../infrastructure/webserver/interfaces/express";
import { userRepositoryDBGenerator } from "../../infrastructure/database/interfaces/user.repositoryDB.interface";
import { userRepositoryGenerator } from "../../application/interfaces/user.repository.interface";

export const userController = (
  userRepositoryGenerator: userRepositoryGenerator,
  userRepositoryDBGenerator: userRepositoryDBGenerator,
  authServiceRepository: AuthServiceRepositoryGenerator,
  authServiceImpl: AuthServiceImplementationGenerator
) => {
  const userRepository = userRepositoryGenerator(userRepositoryDBGenerator())
  const authService = authServiceRepository(authServiceImpl())

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
      const savedUser = await UserUseCase.saveUser(user, userRepository, authService)
      res.json(savedUser)
    } catch (error) {
      next(error)
    }
  }

  const updateUser = async (req: RequestCustom<User>, res: any, next: any) => {
    try {
      const user = req.body as User
      const updatedUser = await UserUseCase.updateUser(user, userRepository)
      res.json(updatedUser)
    } catch (error) {
      next(error)
    }
  }

  const deleteUser = async (req: RequestCustom<User>, res: any, next: any) => {
    try {
      const id = req.params.id
      if (req.user.id !== id) {
        throw new Error('Unauthorized')
      }

      await UserUseCase.deleteUser(id, userRepository, authService)
      res.json({})
    } catch (error) {
      next(error)
    }
  }

  return {
    fetchUserByUsername,
    fetchUserByEmail,
    saveUser,
    updateUser,
    deleteUser,
  }
}