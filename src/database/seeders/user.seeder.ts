import type { EntityManager } from "@mikro-orm/postgresql"
import { Seeder } from "@mikro-orm/seeder"
import { randAmericanFootballTeam } from "@ngneat/falso"
import { randomNumber } from "helper-fns"
import {  UserFactory } from "../factories"

/**
 * Runs the UserSeeder, creating new users with associated posts, comments, and tags.
 * @param em - The EntityManager instance to use for database operations.
 * @returns A Promise that resolves when the seeder has finished running.
 */

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const userFactory = new UserFactory(em)
    const users = await userFactory.create(randomNumber(10, 20))

    for (const user of users) {
     user.firstName = randAmericanFootballTeam()
      user.lastName = randAmericanFootballTeam()
    }

    await em.persistAndFlush(users)
  }
}
