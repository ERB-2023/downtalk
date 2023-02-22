import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserChatRoom } from './user-chat-room.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  profile: string;

  @OneToMany(() => UserChatRoom, (chat) => chat.user)
  chats: UserChatRoom[];
}
