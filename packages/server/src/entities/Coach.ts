import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  BeforeInsert,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { v4 } from "uuid";
import { User } from "./User";
import { Roster } from "./Roster";

@ObjectType()
@Entity()
export class Coach extends BaseEntity {
  @Field()
  @PrimaryColumn("uuid")
  id: string;

  @Field()
  @Column("bool", { default: false })
  headCoach: boolean;

  @Field()
  @Column(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Roster, (roster: Roster) => roster.coaches)
  roster: Roster;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
