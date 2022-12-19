import { Connection } from 'mongoose';
import { USER_TABLE_NAME, UserSchema } from './user.schema';

export const userProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model(USER_TABLE_NAME, UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
