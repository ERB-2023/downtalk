import { Test, TestingModule } from '@nestjs/testing';
import { FriendController } from './friend.controller';

describe('FriendController', () => {
  let controller: FriendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FriendController],
    }).compile();

    controller = module.get<FriendController>(FriendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /friends?limit&offset', () => {
    it('정상 호출시, statusCode 200 전송', () => {});

    it('정상 호출시, Response data Promise<Friend[]> 전송', () => {});

    it('user token(비로그인)이 없는 경우 statusCode 401 전송', () => {});
  });
});
