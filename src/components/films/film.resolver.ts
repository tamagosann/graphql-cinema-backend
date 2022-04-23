import { ConfigService } from '@nestjs/config';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { FilmModel } from './interfaces/Film.model';

@Resolver((of) => FilmModel)
export class FilmsResolver {
  constructor(private configService: ConfigService) {}

  @Query(() => [FilmModel], { name: 'films', nullable: true })
  async getFilms() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
