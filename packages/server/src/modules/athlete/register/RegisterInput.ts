import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class AthleteRegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @Length(1, 255)
  email: string;

  @Field()
  @Length(1, 255)
  password: string;

  @Field()
  @Length(1, 255)
  confirmPassword: string;
}
