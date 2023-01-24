import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from 'src/database/database.module';
import { User } from 'src/database/entity/user.entity';
import { userProviders } from 'src/database/providers/user.provider';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UserController],
      providers: [UserService, ...userProviders],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /users?searchKey&limit&offset', () => {
    it('정상 호출시, statusCode 200 전송', async () => {
      return service.searchUsers('test', 10, 0).then((users) => {
        expect(users.every((user) => user instanceof User)).toBeTruthy();
      });
    });

    it('정상 호출시, Response data Promise<Users> 전송', () => {
      return service.searchUsers('test', 10, 0).then((users) => {
        expect(users.every((user) => user instanceof User)).toBeTruthy();
      });
    });

    it('searchKey, limit, offset 중 하나라도 없는 경우 statusCode 400 전송', () => {});
  });
});
