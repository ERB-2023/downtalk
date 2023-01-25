import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from 'src/database/database.module';
import { friendProviders } from 'src/database/providers/friend.provider';
import { userProviders } from 'src/database/providers/user.provider';
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

  describe('findFreidns', () => {
    it('호출 시, Promise<Friend[]> 타입 return', () => {});
  });
  describe('addFriend', () => {
    it('호출 시, Promise<void> 타입 return', () => {});
  });
});
