import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getDbConfig } from './database.config';

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => getDbConfig(configService),
    }),
  ],
})
export class DatabaseModule {}