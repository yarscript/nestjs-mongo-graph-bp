import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
// import { USER_TABLE_NAME, UserSchema } from './user.schema';
import { userProvider } from './user.provider';
import { DatabaseModule } from '../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_TABLE_NAME, UserSchema } from './user.schema';

@Module({
  imports: [
    // DatabaseModule,
    MongooseModule.forFeature([{ name: USER_TABLE_NAME, schema: UserSchema }]),
  ],
  providers: [UserService, UserResolver],
  exports: [],
})
export class UserModule {}
