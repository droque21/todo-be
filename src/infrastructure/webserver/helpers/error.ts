import { ErrorResponse } from "../interfaces/express";

export const generateCustomError = (statusCode: number, customMessage: string, arrayMessages?: string[]) => {
  const error = new Error(customMessage) as ErrorResponse;
  error.statusCode = statusCode;
  error.arrayMessages = arrayMessages ?? [];
  throw error;
}