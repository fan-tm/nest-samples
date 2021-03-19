import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'general-user',
      password: 'password',
      database: 'wallet_payment_service',
      entities: [path.join(__dirname, '../src/**/*.entity.{js,ts}')],
      synchronize: true,
    }),
  ],
  providers: [FixtureService],
  exports: [FixtureService],
})
export default class WithTypeOrmModule {}
