import { NestFactory } from '@nestjs/core';
import { from } from 'rxjs';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters';
import { AuthGuard } from './guards';
import { LoggingInterceptor } from './interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
