import { Resolver, Mutation, Arg } from "type-graphql";
import { Athlete } from "../../entities/Athlete";
import { AthleteRegisterInput } from "./register/RegisterInput";

@Resolver(Athlete)
export class RegisterAthlete {
  @Mutation(() => Athlete)
  async registerAthlete(
    @Arg("data") { firstName, lastName, email, password }: AthleteRegisterInput
  ): Promise<Athlete> {
    const athlete = Athlete.create({
      user: {
        firstName,
        lastName,
        email,
        password,
      },
    }).save();
    return athlete;
  }
}
