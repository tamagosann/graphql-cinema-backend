import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { map, mergeMap, Observable } from 'rxjs';
import { FilmModel } from './interfaces/Film.model';
@Resolver((of) => FilmModel)
export class FilmsResolver {
  constructor(
    private readonly prisma: PrismaService,
    private httpService: HttpService,
  ) {}

  @Query(() => [FilmModel], { name: 'films', nullable: true })
  getFilms(): Observable<FilmModel> {
    const api_key = process.env.API_KEY;
    return this.httpService
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
      )
      .pipe(
        map(({ data }) => {
          console.log(data);
          return data.results;
        }),
      );
  }

  @Query(() => [FilmModel], { name: 'prismaFilms', nullable: true })
  async getFilmsByPrisma() {
    return this.prisma.film.findMany();
  }
  @Query(() => [FilmModel], { name: 'filmsIndexPage', nullable: true })
  async filmsIndexPage() {
    return [
      {
        id: '1',
        title: 'maaaaaaaaaaaa',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
