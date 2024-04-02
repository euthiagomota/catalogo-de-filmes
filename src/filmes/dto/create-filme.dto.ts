import { IsNotEmpty } from "class-validator"


export class CreateFilmeDto {

    @IsNotEmpty({message: 'Por favor, digite o título do filme TESTEEEEEE.'})
   title: string

    @IsNotEmpty({message: 'Por favor, digite a descrição do filme.'})
    description: string

    @IsNotEmpty({message: 'Por favor, digite o nome do autor do filme.'})
    author: string
}
