import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { FriendModule } from './friend/friend.module';

@Module({
  imports: [ChatModule, AuthModule, UserModule, FriendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
