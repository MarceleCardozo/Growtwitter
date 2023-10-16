import { NextFunction, Request, Response } from "express";
import repository from "../database/prisma.database";

async function tweetVerificationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId, id } = req.params;

    const tweet = await repository.tweet.findUnique({
      where: {
        id: String(id),
        userId: String(userId),
      },
    });

    if (!tweet) {
      return {
        code: 404,
        message: "Tweet not found",
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

export default tweetVerificationMiddleware;
