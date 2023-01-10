import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Address } from './address.dto';

export class CreateCostumerDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @Length(3, 255, { message: 'Nome muito curto/longo' })
  name: string;

  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  @Length(3, 155, { message: 'Email muito curto/longo' })
  @IsEmail({ message: 'Email com formato inválido' })
  email: string;

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @Length(11, 11, {
    message: 'O telefone precisa ter 11 digitos (DDD + 9 dígitos)',
  })
  @IsNumberString({ message: 'Insira apenas números no campo de telefone' })
  phone: string;

  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => Address)
  address: Address;

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @Length(11, 11, { message: 'o CPF precisa ter 11 digitos' })
  @IsNumberString({ message: 'Insira apenas números no campo de cpf' })
  cpf: string;
}
