import process from "node:process"
import { User } from "@entities"
import { Factory } from "@mikro-orm/seeder"
import { randCatchPhrase, randEmail, randFirstName, randFutureDate, randLastName, randUrl, randUserName } from "@ngneat/falso" // this is a faker library
import { randomAvatar } from "helper-fns"

export enum Roles {
  AUTHOR = "author",
  ADMIN = "admin",
  EDITOR = "editor",
}

export class UserFactory extends Factory<User> {
  model = User

  definition(): Partial<User> {
    return {
      firstName: randFirstName(),
      middleName: randFirstName(),
      lastName: randLastName(),
      bio: randCatchPhrase(),
      username: randUserName(),
      avatar: randomAvatar(),
      email: randEmail(),
      roles: [Roles.AUTHOR],
      password: process.env.USER_PASSWORD,
      lastLogin: randFutureDate({ years: 1 }),
      social: {
        twitter: randUrl(),
        facebook: randUrl(),
        linkedin: randUrl(),
      },
    }
  }
}
