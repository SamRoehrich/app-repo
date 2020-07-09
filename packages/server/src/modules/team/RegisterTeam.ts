import { Resolver, Mutation, Arg } from "type-graphql";
import { RegisterInput } from "./register/RegisterInput";
import { Team } from "../../entities/Team";

@Resolver(Team)
export class RegisterTeam {
  @Mutation(() => Team)
  async registerTeam(
    @Arg("data") { homeGym, teamName }: RegisterInput
  ): Promise<Team> {
    const team = Team.create({
      homeGym,
      teamName,
    }).save();

    return team;
  }
}
