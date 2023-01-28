import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/database/providers/user.provider';
import { chatRoomProvider } from 'src/database/providers/chat-room.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ChatService, ChatGateway, ...userProviders, chatRoomProvider],
  controllers: [ChatController],
})
export class ChatModule {}
