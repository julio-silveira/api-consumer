import { IsOptional, IsPostalCode, Length } from 'class-validator';

export class Address {
  @Length(3, 255)
  street: string;

  @Length(3, 155)
  @IsOptional()
  complement: string;

  @Length(1, 5)
  number: string;

  @Length(3, 255)
  state: string;

  @Length(3, 255)
  city: string;

  @IsPostalCode('BR')
  postalCode: string;
}
