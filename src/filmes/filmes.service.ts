import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FilmesService {
  constructor(@InjectModel(Filme.name) private FilmeModel: Model<Filme>) {}

  async create(createFilmeDto: CreateFilmeDto) {
    const createFilme = new this.FilmeModel(createFilmeDto);
    createFilme.save()
    return createFilme
  }

  findAll() {
    return this.FilmeModel.find().exec();
  }

  findOne(id: string) {
    return this.FilmeModel.findById(id);
  }

  update(id: string, updateFilmeDto: UpdateFilmeDto) {
    return this.FilmeModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateFilmeDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
   return this.FilmeModel.deleteOne({
    _id: id,
   });
    
  }
}
