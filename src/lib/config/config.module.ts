import process from "node:process"
import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import Joi from "joi"
import {
  app,
  database,
} from "./configs"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${process.cwd()}/env/.env.development`, `${process.cwd()}/env/.env.production`],
      load: [
        app,
        database,
      ],
      cache: true,
      isGlobal: true,
      expandVariables: true,
      validationSchema: Joi.object({}),
      validationOptions: {
        abortEarly: true,
        cache: true,
        debug: true,
        stack: true,
      },
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class NestConfigModule {}
