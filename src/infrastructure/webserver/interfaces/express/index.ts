import { Request } from "express";

export interface RequestWithUser extends Request {
  user: any;
}

export interface RequestCustom<T> extends RequestWithUser {
  body: T;
}

export interface ErrorResponse extends Error {
  statusCode: number;
  customMessage: string;
  arrayMessages: string[];
}