// import { BadRequestException, Injectable } from '@nestjs/common';
// import { User as UserDto } from './dto/user-query.dto';
// import { UserInsert } from './dto/user-mutation.dto';
// import { UserInput } from './dto/user-input.dto';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User, UserDocument } from './user.schema';
//
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public getUsers() {
    return [
      { age: 1, breed: '13', name: 'qqq' },
      { age: 1, breed: '13', name: 'qqq' },
    ];
  }
  public getOneUser(arg) {
    console.log(arg);
    return { age: 1, breed: '13', name: 'qqq' };
  }

  public newUser(newUser) {
    return newUser;
  }
}
