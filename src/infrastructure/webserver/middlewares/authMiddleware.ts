import { authServiceImpl } from "../../services/authService";
import { Response, NextFunction } from "express";
import { generateCustomError } from "../helpers/error";

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const authService = authServiceImpl();

  if (!token) {
    generateCustomError(401, "No token provided");
  }
  if (token.split(" ")[0] !== "Bearer") {
    generateCustomError(400, "Invalid token format");
  }

  try {
    const decoded = authService.verifyToken(token.split(" ")[1]);
    req.user = decoded;
    next();
  } catch (error) {
    generateCustomError(401, "Invalid token");
  }
}