import { DataSource } from 'typeorm';
import { ChatRoom } from '../entity/chat-room.entity';

export const chatRoomProvider = {
  provide: 'CHATROOM_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(ChatRoom),
  inject: ['DATA_SOURCE'],
};
