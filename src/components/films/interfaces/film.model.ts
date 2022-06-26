import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FilmModel {
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  title: string;

  @Field((type) => String)
  release_date: string;

  @Field()
  backdrop_path?: string;

  @Field((type) => [Number], { nullable: 'items' })
  genre_ids: string[];

  @Field()
  poster_path?: string;

  @Field((type) => String)
  overview: string;

  @Field()
  original_title?: string;
}
