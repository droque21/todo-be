import { userController } from '../../../adapters/controllers/userController';
import { userRepository } from '../../../application/repositories/user.repository';
import { authServiceRepository } from '../../../application/services/authService';
import { userRepositoryDB } from '../../database/repositories/user.repositoryDB';
import { authServiceImpl } from '../../services/authService';

export const userRouter = (express) => {
  const router = express.Router();

  const controller = userController(
    userRepository,
    userRepositoryDB,
    authServiceRepository,
    authServiceImpl
  )

  router.get('/:username', controller.fetchUserByUsername);
  router.get('/email/:email', controller.fetchUserByEmail);
  router.post('/', controller.saveUser);
  router.put('/:id', controller.updateUser);
  router.delete('/:id', controller.deleteUser);
  return router;
}