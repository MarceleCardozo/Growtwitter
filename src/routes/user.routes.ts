import { Router } from "express";
import UserController from "../controllers/user.controller";
import userVerificationMiddleware from "../middlewares/user.verification.middleware";
import authMiddleware from "../middlewares/auth.middleware";

export const userRoutes = () => {
  const router = Router();
  const controller = new UserController();

  router.post("/", controller.create);
  router.get("/", controller.list);
  router.get("/me", authMiddleware, controller.getById);
  router.put(
    "/:id",
    [authMiddleware, userVerificationMiddleware],
    controller.update
  );
  router.delete(
    "/:id",
    [authMiddleware, userVerificationMiddleware],
    controller.delete
  );

  return router;
};
