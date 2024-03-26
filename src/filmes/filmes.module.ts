import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Filme, FilmeSchema } from './entities/filme.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Filme.name, schema:  FilmeSchema}])],
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
