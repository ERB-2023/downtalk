import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { FriendModule } from './friend/friend.module';
import { HttpExceptionsFilter } from './common/filter/exception.filter';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ChatModule, AuthModule, UserModule, FriendModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionsFilter,
    },
  ],
})
export class AppModule {}
