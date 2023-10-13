import { Router } from "express";
import TweetController from "../controllers/tweet.controller";

export const tweetRoutes = () => {
  const router = Router();

  router.post("/:userId", new TweetController().create);
  router.get("/:userId", new TweetController().list);
  router.put("/:userId/:id", new TweetController().update);
  router.delete("/:id", new TweetController().delete);

  return router;
};
