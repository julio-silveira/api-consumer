import { BadRequestException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { oneUser } from './tests/mocks';
import { serviceConfig } from './tests/moduleConfigs';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      serviceConfig,
    ).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('findOne', () => {
  let service: UsersService;
  let model: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      serviceConfig,
    ).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<Model<User>>(getModelToken('User'));
  });

  it('should be defined', () => {
    expect(service.findOne).toBeDefined();
  });
  it('should return a user when found in the database', async () => {
    jest.spyOn(model, 'findOne').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(oneUser),
    } as any);

    expect((await service.findOne('user01')).username).toBe(oneUser.username);
  });
  it('should return null when is not found the database', async () => {
    jest.spyOn(model, 'findOne').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as any);

    expect(await service.findOne('user01')).toBeNull();
  });
});

describe('hashPassword', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      serviceConfig,
    ).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service.hashPassword).toBeDefined();
  });

  it('should convert the password in valid bcrypt hash', async () => {
    const password = '12345678';
    const hashedPassword = await service.hashPassword(password);
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
    expect(isPasswordMatch).toBeTruthy;
  });
});

describe('create', () => {
  let service: UsersService;
  let model: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      serviceConfig,
    ).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<Model<User>>(getModelToken('User'));
  });

  it('should be defined', () => {
    expect(service.create).toBeDefined();
  });

  it('should return a user when found in the database', async () => {
    jest.spyOn(model, 'findOne').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as null);

    jest.spyOn(model, 'create').mockImplementation(() =>
      Promise.resolve({
        username: 'user01',
        password: '12345678',
      }),
    );

    expect(
      await service.create({ username: 'user01', password: '12345678' }),
    ).toEqual({ message: `${oneUser.username} was successfully registered!` });
  });

  it('Should throw a BadRequestError when username is not available', async () => {
    jest.spyOn(model, 'findOne').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(oneUser),
    } as any);

    await expect(
      service.create({ username: 'user01', password: '12345678' }),
    ).rejects.toThrowError(BadRequestException);
  });
});
