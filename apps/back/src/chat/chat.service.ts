import { Inject, Injectable } from '@nestjs/common';
import { ChatRoom } from 'src/database/entity/chat-room.entity';
import { User } from 'src/database/entity/user.entity';
import { In, Repository } from 'typeorm';
import { CreateChattingRoomDto } from './dto/create-room.dto';

@Injectable()
export class ChatService {
  constructor(
    @Inject('CHATROOM_REPOSITORY')
    private readonly chatRoomRepository: Repository<ChatRoom>,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async findRooms(
    userId: number,
    limit: number,
    offset: number,
  ): Promise<ChatRoom[]> {
    return this.chatRoomRepository.find({
      where: {
        users: { id: userId },
      },
      take: limit,
      skip: offset,
    });
  }

  async createRoom(
    hostId: number,
    roomInfo: CreateChattingRoomDto,
  ): Promise<ChatRoom> {
    const userIds: number[] = roomInfo.friends.map((friend) => friend.userId);
    userIds.push(hostId);

    const users = await this.userRepository.find({
      where: { id: In(userIds) },
    });

    const chatRoom = this.chatRoomRepository.create({
      name: roomInfo.name,
      users: users,
    });

    await this.chatRoomRepository.save(chatRoom);

    delete chatRoom['createdAt'];
    delete chatRoom['deletedAt'];
    delete chatRoom['users'];

    return chatRoom;
  }
}
