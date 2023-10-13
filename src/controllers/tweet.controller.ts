import { Request, Response } from "express";
import tweetService from "../services/tweet.service";

export default class TweetController {
  public async create(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { content, type } = req.body;

      const result = await tweetService.create({ content, type, userId });

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
      const { userId } = req.params;
      const result = await tweetService.listByIdUser(userId);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { userId, id } = req.params;
      const { content, type } = req.body;

      const result = await tweetService.update({
        userId,
        id,
        content,
        type,
      });

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
      const { id } = req.params;

      const result = await tweetService.delete(id);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
