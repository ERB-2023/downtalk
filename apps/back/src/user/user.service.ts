import { Inject, Injectable } from '@nestjs/common';
import { User } from '../database/entity/user.entity';
import { Like, Repository } from 'typeorm';
import { UserNotFoundException } from 'src/common/exception/user.exception';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async searchUsers(
    searchKey: string,
    limit: number,
    offset: number,
  ): Promise<User[]> {
    return this.userRepository.find({
      where: [{ email: Like(`%${searchKey}%`) }],
      take: limit,
      skip: offset,
    });
  }

  async getProfile(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      select: ['id', 'name', 'profile'],
    });

    if (!user) throw new UserNotFoundException();

    return user;
  }
}
