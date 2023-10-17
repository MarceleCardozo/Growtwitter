import { Request, Response } from "express";
import likeService from "../services/like.service";

export default class likeController {
  public async create(req: Request, res: Response) {
    try {
      const { userId, tweetId } = req.body;

      const result = await likeService.create({ userId, tweetId });

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await likeService.list();

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async listAllByUser(req: Request, res: Response) {
    try {
      const { userId } = req.body;

      const result = await likeService.listAllLikesByUser(userId);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.body;

      const result = await likeService.delete(id);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
