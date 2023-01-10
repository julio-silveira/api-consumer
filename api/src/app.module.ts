import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CostumersModule } from './costumers/costumers.module';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URL || 'mongodb://db:27017/sharenergy-db',
    ),
    AuthModule,
    CostumersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
