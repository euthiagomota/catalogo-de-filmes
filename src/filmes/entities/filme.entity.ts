import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FilmeDocument = HydratedDocument<Filme>;

@Schema()
export class Filme {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;
}

export const FilmeSchema = SchemaFactory.createForClass(Filme);
