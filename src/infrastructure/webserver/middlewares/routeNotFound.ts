import { generateCustomError } from "./errorHandlingMiddleware";

export const routeNotFoundMiddleware = (req, res, next) => {
  const error = generateCustomError(404, 'Route not found');
  next(error);
}