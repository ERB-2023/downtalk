import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
import { DatabaseModule } from '../database/database.module';
import { friendProviders } from '../database/providers/friend.provider';
import { userProviders } from '../database/providers/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [FriendService, ...friendProviders, ...userProviders],
  controllers: [FriendController],
})
export class FriendModule {}
