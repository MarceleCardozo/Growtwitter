import { NextFunction, Request, Response } from "express";
import repository from "../database/prisma.database";

async function userVerificationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const user = await repository.user.findUnique({
      where: {
        id: String(id),
      },
    });

    if (!user) {
      return {
        code: 404,
        message: "User not found",
      };
    }

    next();
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: `Internal server error: ${error}`,
    });
  }
}

export default userVerificationMiddleware;
