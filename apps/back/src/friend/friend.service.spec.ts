import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/database/entity/user.entity';
import { DatabaseModule } from '../database/database.module';
import { friendProviders } from '../database/providers/friend.provider';
import { userProviders } from '../database/providers/user.provider';
import { FriendService } from './friend.service';

describe('FriendService', () => {
  let service: FriendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [FriendService, ...friendProviders, ...userProviders],
    }).compile();

    service = module.get<FriendService>(FriendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findFriends', () => {
    it('호출 시, Promise<Friend[]> 타입 return', () => {
      let userId: number;
      return service.findFriends(userId, 10, 0).then((friends) => {
        expect(friends.every((friend) => friend instanceof User)).toBeTruthy();

        friends.forEach((friend) => {
          expect(friend).toHaveProperty('id');
          expect(friend).toHaveProperty('name');
          expect(friend).toHaveProperty('image');
        });
      });
    });
  });

  describe('addFriend', () => {
    it('호출 시, Promise<void> 타입 return', () => {});
  });

  describe('deleteFriend', () => {
    it('friend가 없는 경우 FriendNotFound Exception 반환', () => {});

    it('friend가 있는 경우 삭제 후 boolean 반환', () => {});
  });
});
