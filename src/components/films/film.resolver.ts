import { Args, Query, Resolver } from '@nestjs/graphql';
import { FilmModel } from './interfaces/Film.model';

@Resolver((of) => FilmModel)
export class FilmsResolver {
  constructor() {}

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
