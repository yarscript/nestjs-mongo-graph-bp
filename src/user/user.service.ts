import { BadRequestException, Injectable } from '@nestjs/common';
import { User as UserDto } from './dto/user-query.dto';
import { UserInsert } from './dto/user-mutation.dto';
import { UserInput } from './dto/user-input.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  public constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}
  private users: UserDto[] = [
    {
      name: 'Ventus',
      age: 4,
      breed: 'Russian Blue',
      id: '1',
    },
    {
      name: 'Terra',
      age: 5,
      breed: 'Siberian',
      id: '2',
    },
    {
      name: 'Aqua',
      age: 3,
      breed: 'Maine Coon',
      id: '3',
    },
  ];

  getUsers() {
    return this.userModel.find();
  }

  getOneUser(user: UserInput): UserDto {
    const foundUser = this.users.find(
      (existingUser) => existingUser.id === user.id,
    );
    if (!foundUser) {
      throw new BadRequestException(`No user with id ${user.id} found`);
    }
    return foundUser;
  }

  async newUser(user: UserInsert): Promise<User> {
    return await this.userModel.create(user);
  }
}
