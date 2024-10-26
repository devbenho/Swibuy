import {
  Embeddable,
  Entity,
  Property,
} from "@mikro-orm/postgresql";
import { BaseEntity } from "./base.entity";


@Embeddable()
export class Social {
  @Property()
  twitter?: string;

  @Property()
  facebook?: string;

  @Property()
  linkedin?: string;
}

@Entity()
export class User extends BaseEntity {
  @Property()
  firstName!: string;

  @Property()
  middleName?: string;

  @Property()
  lastName!: string;
}