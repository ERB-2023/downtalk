import { USER_ROLE } from 'src/common/enum/chat.enum';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ChatRoom } from './chat-room.entity';
import { User } from './user.entity';

@Entity()
export class UserChatRoom {
  @PrimaryColumn({ name: 'userId' })
  userId: number;

  @PrimaryColumn({ name: 'chatRoomId' })
  chatRoomId: string;

  @Column({
    type: 'enum',
    enum: USER_ROLE,
    default: USER_ROLE.INVITEE,
  })
  role: string;

  @ManyToOne(() => User, (user) => user.chats, {})
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.chats, {})
  @JoinColumn([{ name: 'chatRoomId', referencedColumnName: 'id' }])
  chatRoom: ChatRoom;
}
