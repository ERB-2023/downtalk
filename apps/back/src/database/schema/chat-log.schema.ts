import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatLogDocument = HydratedDocument<ChatLog>;

@Schema()
export class ChatLog {
  @Prop({ required: true })
  roomId: string;

  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const ChatLogSchema = SchemaFactory.createForClass(ChatLog);
