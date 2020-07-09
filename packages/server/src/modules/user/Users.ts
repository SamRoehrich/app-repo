import { Resolver, Query, Field } from "type-graphql";
import { User } from "../../entities/User";

@Resolver(User)
export class UsersResolver {
  @Query(() => String)
  @Field(() => String, { nullable: true })
  async hi() {
    return "hello world";
  }
}
