import { Request, Response, NextFunction } from "express";
export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("route called " + req.originalUrl);
  next();
};
