import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../database/entity/user.entity';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../database/providers/user.provider';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [UserService, ...userProviders],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  describe('searchUsers', () => {
    it('호출 시, Promise<Users[]> 타입 return', () => {
      return service.searchUsers('test', 10, 0).then((users) => {
        expect(users.every((user) => user instanceof User)).toBeTruthy();

        users.forEach((user) => {
          expect(user).toHaveProperty('id');
          expect(user).toHaveProperty('name');
          expect(user).toHaveProperty('profile');
        });
      });
    });
  });
});
