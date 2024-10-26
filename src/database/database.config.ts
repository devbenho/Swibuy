import { User } from '@entities';
import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { ConfigService } from '@nestjs/config';

export const getDbConfig = (configService: ConfigService): Options => ({
  entities: [User],
  dbName: configService.get<string>('DB_NAME'),
  user: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  driver: PostgreSqlDriver,
  debug: true,
  migrations: {
    path: './src/database/migrations',
  },
});