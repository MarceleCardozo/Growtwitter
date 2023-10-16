import { NextFunction, Request, Response } from "express";

function userAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({
      ok: false,
      message: "Username and/or password were not provided",
    });
  }
  next();
}

export default userAuthenticationMiddleware;
