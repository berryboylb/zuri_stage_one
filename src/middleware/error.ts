import { Request, Response, NextFunction } from "express";
import AppError from "../utils/error";

export const errorResponder = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.header("Content-Type", "application/json");
  const status = error.statusCode || 400;
  console.log(`An error Occurred: ${error.message}`);
  res.status(status).json({
    status: "error",
    message: error.message,
    data: {
      statusCode: status,
      timestamp: new Date().toISOString(),
    },
  });
};

export const invalidPathHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).send( req.originalUrl + " is an invalid path");
};
