import { ObjectType, Field, Root } from "type-graphql";
import {
  PrimaryColumn,
  BeforeInsert,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from "typeorm";
import { v4 } from "uuid";

@ObjectType()
@Entity()
export class Stats {
  @Field()
  @PrimaryColumn("uuid")
  id: string;

  @Field()
  @Column()
  height: number;

  @Field()
  @Column()
  weight: number;

  @Field()
  @Column()
  age: number;

  @Field()
  @Column()
  apeIndex: number;

  @Field()
  @Column()
  maxPull: number;

  @Field()
  SWRBar(@Root() parent: Stats): number {
    return parent.weight / parent.maxPull;
  }

  @Field()
  @Column()
  maxHang: number;

  @Field()
  @Column()
  maxHangEdgeSize: number;

  @Field()
  SWREdge(@Root() parent: Stats): number {
    return parent.weight / parent.maxHang;
  }

  @Field()
  @Column()
  pullupsToFailure: number;

  @Field()
  @CreateDateColumn()
  createdAt: string;

  @Field()
  @UpdateDateColumn()
  lastUpdate: string;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
