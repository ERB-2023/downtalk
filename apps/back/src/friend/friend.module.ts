import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
import { DatabaseModule } from 'src/database/database.module';
import { friendProviders } from 'src/database/providers/friend.provider';

@Module({
  imports: [DatabaseModule],
  providers: [FriendService, ...friendProviders],
  controllers: [FriendController],
})
export class FriendModule {}
