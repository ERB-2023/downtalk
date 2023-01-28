import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket, Namespace } from 'socket.io';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {}

  private readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer() namespace: Namespace;

  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  handleDisconnect(client: Socket) {
    // throw new Error('Method not implemented.');
    console.log(client);
  }
  handleConnection(client: Socket, ...args: any[]) {
    // throw new Error('Method not implemented.');
    console.log(client);
  }
  afterInit(server: any) {
    // throw new Error('Method not implemented.');
    this.logger.log('Chat Socket Server Init!!!');
  }
}
