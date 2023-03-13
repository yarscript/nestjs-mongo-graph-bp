import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user-input.dto';
import { UserInsert } from './dto/user-mutation.dto';
import { User } from './dto/user-query.dto';
// import { User as UserModel } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User)
  getUser(@Args('userId') args: UserInput) {
    return this.userService.getOneUser(args);
  }

  @Mutation(() => User)
  async insertUser(@Args('newUser') newUser: UserInsert) {
    return await this.userService.newUser(newUser);
  }
}
