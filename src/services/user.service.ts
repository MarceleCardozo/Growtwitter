import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { User } from "../models/user.model";

class UserService {
  public async create(data: CreateUserDto): Promise<ResponseDto> {
    const user = new User(data.name, data.email, data.username, data.password);

    const createdUser = await repository.user.create({
      data: {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
      },
    });

    return {
      code: 201,
      message: "User created successfully",
      data: createdUser,
    };
  }

  public async listAll(): Promise<ResponseDto> {
    const data = await repository.user.findMany();

    return {
      code: 200,
      message: "Users successfully listed",
      data,
    };
  }

  public async update(data: UpdateUserDto): Promise<ResponseDto> {
    const updatedUser = await repository.user.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
      },
    });

    return {
      code: 200,
      message: "User successfully updated",
      data: updatedUser,
    };
  }

  public async delete(id: string): Promise<ResponseDto> {
    await repository.user.delete({
      where: {
        id,
      },
    });

    return {
      code: 200,
      message: "User successfully deleted",
    };
  }
}

export default new UserService();
