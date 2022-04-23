import { Module } from '@nestjs/common';
import { FilmsResolver } from './film.resolver';

@Module({
  providers: [FilmsResolver],
})
export class FilmsModule {}
