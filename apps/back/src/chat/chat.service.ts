import { Inject, Injectable } from '@nestjs/common';
import { USER_ROLE } from 'src/common/enum/chat.enum';
import { ChatRoom } from 'src/database/entity/chat-room.entity';
import { UserChatRoom } from 'src/database/entity/user-chat-room.entity';
import { User } from 'src/database/entity/user.entity';
import { In, Repository } from 'typeorm';
import { CreateChattingRoomDto } from './dto/create-room.dto';

type userChatRoom = {
  chatRoom: ChatRoom;
  userId: number;
  role: USER_ROLE;
};

@Injectable()
export class ChatService {
  constructor(
    @Inject('USER_CHATROOM_REPOSITORY')
    private readonly userChatRoomRepository: Repository<UserChatRoom>,
    @Inject('CHATROOM_REPOSITORY')
    private readonly chatRoomRepository: Repository<ChatRoom>,
  ) {}

  async findRooms(
    userId: number,
    limit: number,
    offset: number,
  ): Promise<ChatRoom[]> {
    return this.chatRoomRepository.find({
      where: {
        chats: {
          user: { id: userId },
        },
      },
      take: limit,
      skip: offset,
    });
  }

  async createRoom(
    hostId: number,
    roomInfo: CreateChattingRoomDto,
  ): Promise<ChatRoom> {
    //step1. create chat room
    const chatRoom = this.chatRoomRepository.create({ name: roomInfo.name });
    await this.chatRoomRepository.save(chatRoom);

    //step2. find users with host
    const users: userChatRoom[] = [];
    for (let i = 0; i < roomInfo.friends.length; i++) {
      const friend = roomInfo.friends[i];
      users.push({
        chatRoom: chatRoom,
        userId: friend.userId,
        role: USER_ROLE.INVITEE,
      });
    }

    users.push({
      chatRoom: chatRoom,
      userId: hostId,
      role: USER_ROLE.HOST,
    });

    await this.userChatRoomRepository
      .createQueryBuilder()
      .insert()
      .values(users)
      .execute();

    delete chatRoom['createdAt'];
    delete chatRoom['deletedAt'];
    delete chatRoom['users'];

    return chatRoom;
  }
}
