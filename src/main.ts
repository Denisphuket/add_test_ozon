import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
}
bootstrap();
