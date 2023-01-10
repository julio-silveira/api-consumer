import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async onModuleInit() {
    try {
      Logger.log('Tentando criar o usuário');
      const res = await this.userModel.findOne({
        username: 'desafiosharenergy',
      });
      if (res === null) {
        const hash = await this.hashPassword('sh@r3n3rgy');
        const newUser = {
          username: 'desafiosharenergy',
          password: hash,
        };
        const user = await this.userModel.create(newUser);
        Logger.log(`Usuário ${user.username} criado com sucesso`);
      } else Logger.log(`Usuário ${res.username} já existe no banco de dados`);
    } catch (error) {
      throw error;
    }
  }

  async findOne(username: string): Promise<User | null> {
    return await this.userModel.findOne({ username }).exec();
  }

  private async checkUsernameAvailability(username: string): Promise<boolean> {
    const user = await this.findOne(username);
    return user === null;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async create({ username, password }: UserDto) {
    const isUsernameAvaliable = await this.checkUsernameAvailability(username);
    if (!isUsernameAvaliable)
      throw new BadRequestException('Username already taken');

    const hashedPassword = await this.hashPassword(password);

    const userDataToSave: User = { username, password: hashedPassword };
    const newUser = await this.userModel.create(userDataToSave);

    return { message: `${newUser.username} was successfully registered!` };
  }
}
