import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from 'src/database/database.module';
import { ChatRoom } from 'src/database/entity/chat-room.entity';
import { chatRoomProvider } from 'src/database/providers/chat-room.provider';
import { userChatRoomProvider } from 'src/database/providers/user-chat-room.provider';
import { userProviders } from 'src/database/providers/user.provider';
import { ChatService } from './chat.service';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ChatService,
        chatRoomProvider,
        ...userProviders,
        userChatRoomProvider,
      ],
    }).compile();

    service = module.get<ChatService>(ChatService);
  });

  describe('findRooms', () => {
    it('호출 시, Promise<ChatRoom[]> 타입 return', () => {
      let userId: number;

      return service.findRooms(userId, 10, 0).then((chatRooms) => {
        expect(
          chatRooms.every((chatRooms) => chatRooms instanceof ChatRoom),
        ).toBeTruthy();

        chatRooms.forEach((chatRooms) => {
          expect(chatRooms).toHaveProperty('id');
          expect(chatRooms).toHaveProperty('name');
          expect(chatRooms).toHaveProperty('image');
        });
      });
    });
  });
});
