import { Inject, Injectable } from '@nestjs/common';
import { User } from '../database/entity/user.entity';
import { Like, Repository } from 'typeorm';

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
      where: [
        { email: Like(`%${searchKey}%`) },
        { name: Like(`%${searchKey}%`) },
      ],
      take: limit,
      skip: offset,
    });
  }
}
