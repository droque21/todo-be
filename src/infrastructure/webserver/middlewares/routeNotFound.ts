import { generateCustomError } from "../helpers/error";

export const routeNotFoundMiddleware = (req, res, next) => {
  const error = generateCustomError(404, 'Route not found');
  next(error);
}