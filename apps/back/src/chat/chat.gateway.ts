import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket, Namespace } from 'socket.io';

type Message = {
  roomId: string;
  message: string;
};

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {}

  private readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer() namespace: Namespace;

  @SubscribeMessage('enterChatRoom')
  enterChatRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody('roomId') roomId: string,
  ) {
    this.logger.log('enterChatRoom', roomId);
    this.logger.log('client', socket);
    this.namespace.socketsJoin(roomId);
  }

  @SubscribeMessage('message')
  handleEvent(
    @ConnectedSocket() socket: Socket,
    @MessageBody('roomId') roomId: string,
    @MessageBody('message') message: string,
  ): Message {
    this.namespace.to(roomId).emit('message', message);
    this.logger.log('message', { roomId, message });
    return;
  }

  handleDisconnect(client: Socket) {
    this.logger.log('disconnected ', client);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log('connected ', client);
  }
  afterInit(server: any) {
    // throw new Error('Method not implemented.');
    this.logger.log('Chat Socket Server Init!!!');
  }
}
