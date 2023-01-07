import { IsBoolean, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @Length(3, 30)
  username: string;

  @Length(8, 30)
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsOptional()
  remember: boolean;
}
