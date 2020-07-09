import { InputType, Field } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field()
  teamName: string;

  @Field()
  homeGym: string;
}
