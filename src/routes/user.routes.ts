import { Router } from "express";
import UserController from "../controllers/user.controller";
import userVerificationMiddleware from "../middlewares/user.verification.middleware";

export const userRoutes = () => {
  const router = Router();

  router.post("/", new UserController().create);
  router.get("/", new UserController().list);
  router.put("/:id", userVerificationMiddleware, new UserController().update);
  router.delete(
    "/:id",
    userVerificationMiddleware,
    new UserController().delete
  );

  return router;
};
