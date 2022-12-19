import { ObjectType, Field, Int } from '@nestjs/graphql';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export const USER_TABLE_NAME = 'user';

export type UserDocument = HydratedDocument<User>;

@Schema()
@ObjectType(USER_TABLE_NAME)
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => Int, { description: 'User Age' })
  age: number;

  @Prop()
  @Field(() => String, { description: 'User Name' })
  name: string;

  @Prop()
  @Field(() => String, { description: 'User Breed' })
  breed: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
