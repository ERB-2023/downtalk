import { Inject, Injectable } from '@nestjs/common';
import { FRIEND_STATUS } from 'src/common/enum/friend.enum';
import { Friend } from 'src/database/entity/friend.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @Inject('FRIEND_REPOSITORY')
    private readonly friendRepository: Repository<Friend>,
  ) {}

  async findFriends(
    userId: number,
    limit: number,
    offset: number,
  ): Promise<Friend[]> {
    return this.friendRepository.find({
      where: {
        requestUser: { id: userId },
        status: FRIEND_STATUS.FRIEND,
      },
      take: limit,
      skip: offset,
    });
  }
}
