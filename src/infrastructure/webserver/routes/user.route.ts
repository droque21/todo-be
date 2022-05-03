import { userController } from '../../../adapters/controllers/userController';
import { userRepository } from '../../../application/repositories/user.repository';
import { authServiceRepository } from '../../../application/services/authService';
import { userRepositoryDB } from '../../database/repositories/user.repositoryDB';
import { authServiceImpl } from '../../services/authService';
import { authMiddleware } from '../middlewares/authMiddleware';

export const userRouter = (express) => {
  const router = express.Router();

  const controller = userController(
    userRepository,
    userRepositoryDB,
    authServiceRepository,
    authServiceImpl
  )

  router.get('/username/:username', authMiddleware, controller.fetchUserByUsername);
  router.get('/email/:email', authMiddleware, controller.fetchUserByEmail);
  router.post('/', controller.saveUser);
  router.put('/:id', authMiddleware, controller.updateUser);
  router.delete('/:id', authMiddleware, controller.deleteUser);
  router.post('/login', controller.loginUser);
  return router;
}