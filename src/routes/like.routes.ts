import { Router } from "express";
import likeController from "../controllers/like.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const likeRoutes = () => {
  const router = Router();
  const controller = new likeController();

  router.post("/", [authMiddleware], new likeController().create);
  router.get("/:tweetId", [authMiddleware], new likeController().list);
  router.get("/", [authMiddleware], new likeController().listAllByUser);
  router.delete("/", [authMiddleware], new likeController().delete);

  return router;
};
