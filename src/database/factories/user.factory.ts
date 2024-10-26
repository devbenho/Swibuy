import { User } from "@entities"
import { Factory } from "@mikro-orm/seeder"
import {  randFirstName, randLastName } from "@ngneat/falso" // this is a faker library



export class UserFactory extends Factory<User> {
  model = User

  definition(): Partial<User> {
    return {
      firstName: randFirstName(),
      middleName: randFirstName(),
      lastName: randLastName(),     
    }
  }
}
