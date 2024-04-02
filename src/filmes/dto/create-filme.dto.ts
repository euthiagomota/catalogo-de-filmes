import { IsNotEmpty } from "class-validator"


export class CreateFilmeDto {

    @IsNotEmpty({message: 'Por favor, digite o título do filme para executar a função corretamente.'})
   title: string

    @IsNotEmpty({message: 'Por favor, digite a descrição do filme para executar a função corretamente.'})
    description: string

    @IsNotEmpty({message: 'Por favor, digite o nome do autor do filme para executar a função corretamente.'})
    author: string
}
