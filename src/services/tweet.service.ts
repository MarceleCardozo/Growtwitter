import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import {
  CreateTweetDto,
  FoundTweetDTO,
  UpdateTweetDto,
} from "../dtos/tweet.dto";
import { Tweet } from "../models/tweet.model";

class TweetService {
  public async create(data: CreateTweetDto): Promise<ResponseDto> {
    const tweet = new Tweet(data.content, data.type, data.userId);

    const createdTweet = await repository.tweet.create({
      data: {
        content: tweet.content,
        type: tweet.type,
        userId: tweet.userId,
      },
    });

    return {
      code: 201,
      message: "Tweet created successfully",
      data: createdTweet,
    };
  }

  public async showUniqueTweet(id: string) {
    const result = await repository.tweet.findUnique({
      where: {
        id,
      },
    });

    return result;
  }

  public async listByIdUser(userId: string): Promise<ResponseDto> {
    const data = await repository.tweet.findMany({
      where: {
        userId: userId,
      },
    });

    return {
      code: 200,
      message: "Tweets successfully listed",
      data,
    };
  }

  public async update(data: UpdateTweetDto): Promise<ResponseDto> {
    const updatedTweet = await repository.tweet.update({
      where: {
        userId: data.userId,
        id: data.id,
      },
      data: {
        content: data.content,
        type: data.type,
      },
    });

    return {
      code: 200,
      message: "Tweet successfully updated",
      data: updatedTweet,
    };
  }

  public async delete(data: FoundTweetDTO): Promise<ResponseDto> {
    const deleted = await repository.tweet.delete({
      where: {
        userId: data.userId,
        id: data.id,
      },
    });

    return {
      code: 200,
      message: "Tweet successfully deleted",
    };
  }
}

export default new TweetService();
