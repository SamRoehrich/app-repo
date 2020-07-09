import { OneToMany, Entity, PrimaryColumn, BeforeInsert } from "typeorm";
import { Athlete } from "./Athlete";
import { v4 } from "uuid";
import { Field, ObjectType } from "type-graphql";
import { Coach } from "./Coach";

@ObjectType()
@Entity()
export class Roster {
  @PrimaryColumn("uuid")
  @Field()
  id: string;

  @Field(() => Athlete)
  @OneToMany(() => Athlete, (athlete) => athlete.roster)
  athletes: Athlete[];

  @Field(() => Coach)
  @OneToMany(() => Coach, (coach) => coach.roster)
  coaches: Coach[];

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
