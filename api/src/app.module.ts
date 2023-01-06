import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URL || 'mongodb://db:27017/sharenergy-db',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
