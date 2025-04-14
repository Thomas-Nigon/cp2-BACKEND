import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: string;

  @Field({ nullable: false })
  @Column({ length: 100 })
  code!: string;

  @Field({ nullable: false })
  @Column({ unique: true })
  name!: string;

  @Field({ nullable: false })
  @Column({ length: 100 })
  flag!: string;

  @Field({ nullable: false })
  @Column({ length: 100 })
  continent!: string;
}
