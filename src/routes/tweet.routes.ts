import { Router } from "express";
import TweetController from "../controllers/tweet.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const tweetRoutes = () => {
  const router = Router();

  router.post("/:userId", [authMiddleware], new TweetController().create);
  router.get("/:userId", [authMiddleware], new TweetController().listByIdUser);
  router.get("/", authMiddleware, new TweetController().list);
  router.put("/:userId/:id", [authMiddleware], new TweetController().update);
  router.delete("/:id", [authMiddleware], new TweetController().delete);

  return router;
};
