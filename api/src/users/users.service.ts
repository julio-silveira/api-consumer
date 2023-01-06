import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

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
