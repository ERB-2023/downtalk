import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { ChatRoom } from 'src/database/entity/chat-room.entity';
import { ChatService } from './chat.service';
import { CreateChattingRoomDto } from './dto/create-room.dto';

@Controller('chatrooms')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getChattingRooms(
    @Request() req: { user: { id: number } },
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    return this.chatService.findRooms(1, limit, offset);
  }

  @Post()
  async createChattingRoom(
    @Request() req: { user: { id: number } },
    @Body() roomInfo: CreateChattingRoomDto,
  ): Promise<ChatRoom> {
    return this.chatService.createRoom(req.user.id, roomInfo);
  }
}
