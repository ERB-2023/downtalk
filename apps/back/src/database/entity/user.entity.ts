import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserChatRoom } from './user-chat-room.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: false })
  email: string;
  
  @Column()
  password: string;

  @OneToMany(() => UserChatRoom, (chat) => chat.user)
  chats: UserChatRoom[];
}
