import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput, LoginInput, User } from "../schema/user.schema";
import { CreateBasicInformationInput } from "../schema/user.schema/user.schema";
import UserService from "../service/user.service";
import Context from "../types/context";

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  createUser(@Arg("input") input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => String) // Returns the JWT
  login(@Arg("input") input: LoginInput, @Ctx() context: Context) {
    return this.userService.login(input, context);
  }

  @Authorized()
  @Mutation(() => User)
  createBasicInformation(
    @Arg("input", () => CreateBasicInformationInput)
    input: CreateBasicInformationInput,
    @Ctx() context: Context
  ) {
    const user = context.user!;
    const userId = user?._id;
    return this.userService.createBasicInformation(input, userId);
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: Context) {
    return context.user;
  }

  @Query(() => [User])
  users() {
    return this.userService.findUsers();
  }
}
