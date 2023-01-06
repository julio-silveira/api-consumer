import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { CostumersController } from './costumers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Costumer, CostumerSchema } from './schemas/costumer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Costumer.name, schema: CostumerSchema },
    ]),
  ],
  controllers: [CostumersController],
  providers: [CostumersService],
})
export class CostumersModule {}
