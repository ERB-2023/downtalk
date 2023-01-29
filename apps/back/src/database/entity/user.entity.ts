import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ChatRoom } from './chat-room.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: false })
  email: string;

  @ManyToMany(() => ChatRoom)
  @JoinTable({ name: 'user_chat_rooms' })
  chatRooms: ChatRoom[];
}
