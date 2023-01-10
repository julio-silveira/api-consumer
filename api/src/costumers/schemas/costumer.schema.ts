import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Address } from '../dto/address.dto';

export type CostumerDocument = HydratedDocument<Costumer>;

@Schema()
export class Costumer {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: Address;

  @Prop()
  cpf: string;
}

export const CostumerSchema = SchemaFactory.createForClass(Costumer);
