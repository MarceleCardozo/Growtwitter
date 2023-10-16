import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import userAuthenticationMiddleware from "../middlewares/user.authentication.middleware";

export const authRoutes = () => {
  const router = Router();
  const controller = new AuthController();

  router.post("/login", userAuthenticationMiddleware, controller.create);
  router.get("/logout", controller.delete);

  return router;
};
