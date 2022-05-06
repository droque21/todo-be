import { taskRouter } from './task.route';
import { userRouter } from './user.route';

export const routes = (app, express) => {
  app.use('/api/v1/user', userRouter(express));
  app.use('/api/v1/task', taskRouter(express));
}