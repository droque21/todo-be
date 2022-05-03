import { authServiceImpl } from "../../services/authService";
import { authServiceRepository } from "../../../application/services/authService";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const authService = authServiceRepository(authServiceImpl());

  if (!token) {
    throw new Error("No token provided");
  }
  if (token.split(" ")[0] !== "Bearer") {
    throw new Error("Invalid token format");
  }
  try {
    const decoded = authService.verifyToken(token.split(" ")[1]);
    req.user = decoded;
    next();
  } catch (error) {
    throw new Error("Invalid token");
  }
}