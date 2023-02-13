import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserChatRoom } from './user-chat-room.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ci: string;

  @Column()
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  profile: string;

  @OneToMany(() => UserChatRoom, (chat) => chat.user)
  chats: UserChatRoom[];
}
