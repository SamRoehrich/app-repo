import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  BeforeInsert,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { v4 } from "uuid";
import { User } from "./User";
import { Roster } from "./Roster";
import { Stats } from "./Stats";

@ObjectType()
@Entity()
export class Athlete extends BaseEntity {
  @Field()
  @PrimaryColumn("uuid")
  id: string;

  @Field()
  @Column(() => User)
  @JoinColumn()
  user: User;

  @Field()
  @OneToOne(() => Stats)
  @JoinColumn()
  stats: Stats;

  @Field()
  @ManyToOne(() => Roster, (roster: Roster) => roster.athletes)
  roster: Roster;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
