import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = req.headers;

    if (!token) {
      return {
        code: 401,
        message: "Authentication token fail",
      };
    }

    const user = await userService.getByToken(token as string);

    if (!user) {
      return {
        code: 401,
        message: "Authentication token fail",
      };
    }

    next();
  } catch (error) {
    return {
      code: 500,
      message: `Internal Server Error: ${error}`,
    };
  }
}

export default authMiddleware;
