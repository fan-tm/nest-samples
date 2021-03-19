import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, User } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'general-user',
      password: 'password',
      database: 'wallet_payment_service',
      entities: [User, Role],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Role]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

30.0;

1;
31.3;
