import { Module } from '@nestjs/common';
import { FilmesModule } from './filmes/filmes.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [FilmesModule,
    MongooseModule.forRoot('mongodb+srv://euthiagojose2004:UoCNnYG3sIkRPXdS@catalogo-filme.iyag7r4.mongodb.net/')],
  controllers: [],
  providers: [],
})
export class AppModule {}