import { userRouter } from './user.route';
export const routes = (app, express) => {
  app.use('/api/v1/users', userRouter(express));
}