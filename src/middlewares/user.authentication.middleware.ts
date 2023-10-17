import { NextFunction, Request, Response } from "express";

function userAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    return res.status(400).send({
      ok: false,
      message: "Identifier and/or password were not provided",
    });
  }
  next();
}

export default userAuthenticationMiddleware;
