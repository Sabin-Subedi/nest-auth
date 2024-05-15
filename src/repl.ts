import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootStrap() {
  await repl(AppModule);
}

bootStrap();
