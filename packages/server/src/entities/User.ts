import { ObjectType, Field, Root } from "type-graphql";
import { Column, PrimaryColumn, BeforeInsert } from "typeorm";
import { v4 } from "uuid";

@ObjectType()
export class User {
  @Field()
  @PrimaryColumn("uuid")
  id: string;

  @Field()
  @Column("varchar", { length: 255, unique: true })
  email: string;

  @Column("varchar", { length: 255 })
  password: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Column("bool", { default: false })
  isActive: boolean;

  @Field()
  name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
