import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './mysql.config';
import { ConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => databaseConfig as ConnectionOptions,
    }),
  ],
})
export default class MysqlModule {}
