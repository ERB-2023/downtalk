import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../database/entity/user.entity';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../database/providers/user.provider';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { UserNotFoundException } from 'src/common/exception/user.exception';
import { ConfigModule } from '@nestjs/config';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '../../.env',
        }),
      ],
      providers: [UserService, ...userProviders],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>('USER_REPOSITORY');
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

  describe('get Profile', () => {
    let profileTestUser: User;
    beforeAll(async () => {
      profileTestUser = repository.create({
        name: 'profileTest',
        email: 'profileTest@gmail.com',
      });

      await repository.save(profileTestUser);
    });

    it('호출 시, Promise<User> 타입 return', () => {
      return service.getProfile(profileTestUser.id).then((user) => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('profile');
      });
    });

    it('없는 사용자인 경우 UserNotFoundException 반환', async () => {
      await repository.delete(profileTestUser);
      try {
        await service.getProfile(profileTestUser.id);
      } catch (error) {
        expect(error).toBeInstanceOf(UserNotFoundException);
        expect(error.status).toEqual(404);
      }
    });
  });
});
