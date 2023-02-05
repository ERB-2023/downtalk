import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreateChattingRoomDto {
  @IsNotEmpty({ always: true })
  @IsString()
  name: string;

  @IsNotEmpty({ always: true })
  @IsArray()
  friends: Record<string, any>[];
}
