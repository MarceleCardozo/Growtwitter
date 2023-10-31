import { Router } from "express";
import TweetController from "../controllers/tweet.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const tweetRoutes = () => {
  const router = Router();
  const controller = new TweetController();

  router.post("/:userId", [authMiddleware], controller.create);
  router.get("/:userId", [authMiddleware], controller.listByIdUser);
  router.get("/", authMiddleware, controller.list);
  router.put("/:userId/:id", [authMiddleware], controller.update);
  router.delete("/:id", [authMiddleware], controller.delete);

  return router;
};
