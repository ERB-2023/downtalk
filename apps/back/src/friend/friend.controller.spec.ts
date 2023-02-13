import { Test, TestingModule } from '@nestjs/testing';
import { Friend } from 'src/database/entity/friend.entity';
import { User } from 'src/database/entity/user.entity';
import { Repository } from 'typeorm';
import { DatabaseModule } from '../database/database.module';
import { friendProviders } from '../database/providers/friend.provider';
import { userProviders } from '../database/providers/user.provider';
import { FriendController } from './friend.controller';
import { FriendNotFound } from './friend.exception';
import { FriendService } from './friend.service';

describe('FriendController', () => {
  let controller: FriendController;
  let service: FriendService;
  let userRepository: Repository<User>;
  let friendRepository: Repository<Friend>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [FriendController],
      providers: [FriendService, ...friendProviders, ...userProviders],
    }).compile();

    controller = module.get<FriendController>(FriendController);
    service = module.get<FriendService>(FriendService);

    userRepository = module.get<Repository<User>>('USER_REPOSITORY');
    friendRepository = module.get<Repository<Friend>>('FRIEND_REPOSITORY');
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /friends?limit&offset', () => {
    it('정상 호출시, statusCode 200 전송', () => {});

    it('정상 호출시, Response data Promise<Friend[]> 전송', () => {});

    it('user token(비로그인)이 없는 경우 statusCode 401 전송', () => {});
  });
  describe('POST /friends', () => {
    it('정상 호출시, statusCode 201 전송', () => {});

    it('친구 추가하려는 아이디의 회원이 존재하지 않는 경우 statusCod 404 전송', () => {});

    it('이미 친구로 추가되어 있는 경우 statusCode 403 전송', () => {});
  });

  describe('Delete /friends/:friendId', () => {
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

    it('정상 호출시, Promise<boolean> 전송', async () => {
      const result = await controller.deleteFriend(
        { user: { id: user1.id } },
        user2.id,
      );

      expect(typeof result).toBe('boolean');
    });

    it('친구가 없는 경우, statusCode 404 전송', async () => {
      try {
        await controller.deleteFriend({ user: { id: user1.id } }, user3.id);
      } catch (error) {
        expect(error).toBeInstanceOf(FriendNotFound);
        expect(error.status).toEqual(404);
      }
    });
  });
});
