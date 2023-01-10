import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Length,
} from 'class-validator';

export class Address {
  @IsNotEmpty({ message: 'O campo "Rua" não pode ser vazio' })
  @Length(3, 255, { message: 'Rua muito curto/longo' })
  street: string;

  @IsOptional()
  complement: string;

  @IsNotEmpty({ message: 'O campo "Nº" não pode ser vazio' })
  @Length(1, 5, { message: 'Número muito curto/longo' })
  number: string;

  @IsNotEmpty({ message: 'O campo "Estado" não pode ser vazio' })
  @Length(2, 155, { message: 'Estado muito curto/longo' })
  state: string;

  @IsNotEmpty({ message: 'O campo "Cidade" não pode ser vazio' })
  @Length(3, 255, { message: 'Cidade muito curto/longo' })
  city: string;

  @IsNotEmpty({ message: 'O campo "CEP" não pode ser vazio' })
  @Length(8, 8, { message: 'O cep precisa ter 8 dígitos' })
  @IsNumberString({ message: 'Insira apenas números no campo de CEP' })
  postalCode: string;
}
