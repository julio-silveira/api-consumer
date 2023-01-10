import { IsBoolean, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @Length(3, 30, {
    message: 'O nome de usuário precisa ter de 3 a 30 caracteres',
  })
  username: string;

  @Length(8, 30, {
    message: 'A senha precisa ter de 8 a 30 caracteres',
  })
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  password: string;

  @IsBoolean()
  @IsOptional()
  remember?: boolean;
}
