import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FilmsResolver } from './film.resolver';

@Module({
  imports: [HttpModule],
  providers: [FilmsResolver],
})
export class FilmsModule {}
