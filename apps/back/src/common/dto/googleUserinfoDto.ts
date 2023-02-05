import { IsNotEmpty, IsString } from 'class-validator';

export class googleUserinfoDto {
  @IsString()
  @IsNotEmpty({ always: true })
  public email: string;

  @IsString()
  @IsNotEmpty({ always: true })
  public name: string;
}
