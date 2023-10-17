import repository from "../database/prisma.database";
import { CreateLikeDto } from "../dtos/like.dto";
import { ResponseDto } from "../dtos/response.dto";
import { Like } from "../models/like.model";
import tweetService from "./tweet.service";
import userService from "./user.service";

class LikeService {
  public async create(data: CreateLikeDto): Promise<ResponseDto> {
    const like = new Like(data.userId, data.tweetId);

    const user = await userService.getById(data.userId);

    const tweet = await tweetService.showUniqueTweet(data.tweetId);

    const createLike = await repository.like.create({
      data: {
        userId: user!.id,
        tweetId: tweet!.id,
      },
      include: {
        TweetId: {
          include: {
            User: true,
          },
        },
      },
    });

    return {
      code: 200,
      message: `User: ${user?.username} liked tweet: '${createLike.TweetId.content}' from user: ${createLike.TweetId.User.username}`,
    };
  }

  public async list(): Promise<ResponseDto> {
    const result = await repository.like.findMany();

    return {
      code: 200,
      message: "Likes successfully listed",
      data: result,
    };
  }

  public async listAllLikesByUser(userId: string): Promise<ResponseDto> {
    const result = await repository.like.findMany({
      where: {
        userId,
      },
    });

    return {
      code: 200,
      message: "User likes listed successfully",
      data: result,
    };
  }

  public async delete(id: string): Promise<ResponseDto> {
    const result = await repository.like.delete({
      where: {
        id,
      },
    });

    return {
      code: 200,
      message: "Like successfully deleted",
    };
  }
}

export default new LikeService();
