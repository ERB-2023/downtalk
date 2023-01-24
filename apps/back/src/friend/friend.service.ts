import { Inject, Injectable } from '@nestjs/common';
import { FRIEND_STATUS } from 'src/common/enum/friend.enum';
import { FriendAlreadyAddedException } from 'src/common/exception/friend.exception';
import { UserNotFoundException } from 'src/common/exception/user.exception';
import { Friend } from 'src/database/entity/friend.entity';
import { User } from 'src/database/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
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

  async addFriend(
    requestUserId: number,
    addressedUserId: number,
  ): Promise<void> {
    const friend = await this.userRepository.findOne({
      where: { id: addressedUserId },
    });

    // 사용자가 없는 경우 404 Not Found
    if (!friend) throw new UserNotFoundException();

    const isFriend = await this.friendRepository.findOne({
      where: {
        requestUser: { id: requestUserId },
        addressedUser: { id: addressedUserId },
      },
    });

    // 이미 친구인 경우 403 Forbidden
    if (isFriend) throw new FriendAlreadyAddedException();

    const friendship = await this.friendRepository.create({
      requestUser: { id: requestUserId },
      addressedUser: { id: addressedUserId },
    });

    this.friendRepository.save(friendship);
    return;
  }
}
