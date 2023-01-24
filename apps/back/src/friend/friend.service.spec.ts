import { Test, TestingModule } from '@nestjs/testing';
import { FriendService } from './friend.service';

describe('FriendService', () => {
  let service: FriendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendService],
    }).compile();

    service = module.get<FriendService>(FriendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findFreidns', () => {
    it('호출 시, Promise<Friend[]> 타입 return', () => {});
  });
  describe('addFriend', () => {
    it('호출 시, Promise<void> 타입 return', () => {});
  });
});
