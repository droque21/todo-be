import { userController } from '../../../adapters/controllers/userController';
import { userRepositoryDB } from '../../database/repositories/user.repositoryDB';
import { authServiceImpl } from '../../services/authService';
import { authMiddleware } from '../middlewares';

export const userRouter = (express) => {
  const router = express.Router();

  const controller = userController(
    userRepositoryDB(),
    authServiceImpl(),
  )

  router.get('/username/:username', authMiddleware, controller.fetchUserByUsername);
  router.get('/email/:email', authMiddleware, controller.fetchUserByEmail);
  router.post('/', controller.saveUser);
  router.put('/', authMiddleware, controller.updateUser);
  router.post('/login', controller.loginUser);
  return router;
}