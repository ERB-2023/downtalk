import { IsString, IsArray } from 'class-validator';

export class CreateChattingRoomDto {
  @IsString()
  name: string;

  @IsArray()
  friends: Record<string, any>[];
}
