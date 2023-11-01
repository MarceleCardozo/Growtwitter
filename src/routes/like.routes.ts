import { Router } from "express";
import likeController from "../controllers/like.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const likeRoutes = () => {
  const router = Router();
  const controller = new likeController();

  router.post("/", [authMiddleware], controller.create);
  router.get("/:tweetId", [authMiddleware], controller.list);
  router.get("/", [authMiddleware], controller.listAllByUser);
  router.delete("/:id", [authMiddleware], controller.delete);

  return router;
};
