import { Test, TestingModule } from '@nestjs/testing';
import { Friend } from 'src/database/entity/friend.entity';
import { User } from 'src/database/entity/user.entity';
import { Repository } from 'typeorm';
import { DatabaseModule } from '../database/database.module';
import { friendProviders } from '../database/providers/friend.provider';
import { userProviders } from '../database/providers/user.provider';
import { FriendNotFound } from './friend.exception';
import { FriendService } from './friend.service';

describe('FriendService', () => {
  let service: FriendService;
  let userRepository: Repository<User>;
  let friendRepository: Repository<Friend>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [FriendService, ...friendProviders, ...userProviders],
    }).compile();

    service = module.get<FriendService>(FriendService);
    userRepository = module.get<Repository<User>>('USER_REPOSITORY');
    friendRepository = module.get<Repository<Friend>>('FRIEND_REPOSITORY');
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
    let user1: User;
    let user2: User;
    let user3: User;
    beforeAll(async () => {
      user1 = await userRepository.save({
        name: 'testUser',
        email: 'testEmail@google.com',
        ci: 'testCI',
      });

      user2 = await userRepository.save({
        name: 'testUser2',
        email: 'testEmail2@google.com',
        ci: 'testCI',
      });

      user3 = await userRepository.save({
        name: 'testUser3',
        email: 'testEmail3@google.com',
        ci: 'testCI',
      });

      const friendship = await friendRepository.create({
        requestUser: { id: user1.id },
        addressedUser: { id: user2.id },
      });

      await friendRepository.save(friendship);
    });

    it('friend가 없는 경우 FriendNotFound Exception 반환', () => {
      expect(service.deleteFriend(user1.id, user3.id)).rejects.toThrow(
        FriendNotFound,
      );
    });

    it('friend가 있는 경우 삭제 후 boolean 반환', () => {
      return service.deleteFriend(user1.id, user2.id).then((deleted) => {
        expect(deleted).toBeTruthy();
      });
    });
  });
});
