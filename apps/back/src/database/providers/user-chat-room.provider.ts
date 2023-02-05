import { DataSource } from 'typeorm';
import { UserChatRoom } from '../entity/user-chat-room.entity';

export const userChatRoomProvider = {
  provide: 'USER_CHATROOM_REPOSITORY',
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(UserChatRoom),
  inject: ['DATA_SOURCE'],
};
