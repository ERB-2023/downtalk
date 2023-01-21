import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /users?searchKey&limit&offset', () => {
    it('정상 호출시, statusCode 200 전송', () => {});

    it('정상 호출시, Response data Promise<Users> 전송', () => {});

    it('searchKey, limit, offset 중 하나라도 없는 경우 statusCode 400 전송', () => {});
  });
});
