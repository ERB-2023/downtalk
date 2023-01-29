import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { User } from '../database/entity/user.entity';
import { userProviders } from '../database/providers/user.provider';
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

  describe('searchUsers', () => {
    it('정상 호출시, Response data Promise<Users> 전송', () => {
      return controller.searchUsers('test', 10, 0).then((users) => {
        expect(users.every((user) => user instanceof User)).toBeTruthy();
      });
    });
  });
});
