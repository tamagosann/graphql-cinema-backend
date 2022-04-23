import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './components/films/film.module';
import { EnvModule } from './config/environments/env.module';
import { Env } from './config/environments/env.service';
import { PrismaModule } from 'nestjs-prisma';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    EnvModule,
    GraphQLModule.forRootAsync({
      inject: [Env],
      useFactory: (env: Env) => env.GqlModuleOptionsFactory,
    }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: path.join(
    //     process.cwd(),
    //     'src/generated/graphql/schema.gql',
    //   ),
    //   sortSchema: true,
    // }),
    WinstonModule.forRootAsync({
      inject: [Env],
      useFactory: (env: Env) => env.WinstonModuleOptionsFactory,
    }),
    PrismaModule.forRootAsync({
      imports: [WinstonModule],
      inject: [Env],
      isGlobal: true,
      useFactory: (env: Env) => ({
        prismaOptions: env.PrismaOptionsFactory,
      }),
    }),
    FilmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
