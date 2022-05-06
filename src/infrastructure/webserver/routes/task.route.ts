import { taskController } from '../../../adapters/controllers/task.controllet';
import { taskRepositoryDB } from '../../database/repositories/task.repositoryDB';
import { authMiddleware } from '../middlewares';

export const taskRouter = (express) => {
  const router = express.Router();

  const controller = taskController(
    taskRepositoryDB(),
  )

  router.post('/', authMiddleware, controller.createTask);
  router.get('/', authMiddleware, controller.getTasksFromUser);
  router.put('/:taskId/subtask', authMiddleware, controller.addSubTaskToTask);
  router.get('/:taskId', authMiddleware, controller.getTaskById);
  return router;
}