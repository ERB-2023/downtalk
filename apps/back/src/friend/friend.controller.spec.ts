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
  describe('POST /friends', () => {
    it('정상 호출시, statusCode 201 전송', () => {});

    it('친구 추가하려는 아이디의 회원이 존재하지 않는 경우 statusCod 404 전송', () => {});

    it('이미 친구로 추가되어 있는 경우 statusCode 403 전송', () => {});
  });
});
