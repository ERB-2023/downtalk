import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from 'src/database/database.module';
import { chatRoomProvider } from 'src/database/providers/chat-room.provider';
import { userChatRoomProvider } from 'src/database/providers/user-chat-room.provider';
import { userProviders } from 'src/database/providers/user.provider';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

describe('ChatController', () => {
  let controller: ChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ChatService,
        ...userProviders,
        chatRoomProvider,
        userChatRoomProvider,
      ],
      controllers: [ChatController],
    }).compile();

    controller = module.get<ChatController>(ChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
