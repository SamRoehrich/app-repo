import {
  Entity,
  PrimaryColumn,
  BeforeInsert,
  Column,
  JoinColumn,
  OneToOne,
  BaseEntity,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { v4 } from "uuid";
import { Roster } from "./Roster";

@ObjectType()
@Entity()
export class Team extends BaseEntity {
  @Field()
  @PrimaryColumn("uuid")
  id: string;

  @Field()
  @Column()
  teamName: string;

  @Field()
  @Column()
  homeGym: string;

  @Field()
  @OneToOne(() => Roster)
  @JoinColumn()
  roster: Roster;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
