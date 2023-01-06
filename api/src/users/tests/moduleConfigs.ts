import { getModelToken } from '@nestjs/mongoose';
import { UsersService } from '../users.service';
import { oneUser } from './mocks';

export const serviceConfig = {
  providers: [
    UsersService,
    {
      provide: getModelToken('User'),
      useValue: {
        new: jest.fn().mockResolvedValue(oneUser),
        constructor: jest.fn().mockResolvedValue(oneUser),
        findOne: jest.fn(),
        create: jest.fn(),
        exec: jest.fn(),
      },
    },
  ],
};
