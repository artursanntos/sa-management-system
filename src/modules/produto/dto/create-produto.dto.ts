import { IsAlphanumeric, IsInt, IsNotEmpty, IsNumber, IsString, Length } from "class-validator"

export class CreateProdutoDTO {
    id?: string;

    @IsNotEmpty({
        message:'Você deve especificar o nome do produto'
    })
    @Length(5,100, {
        message:'O nome deve ter no mínimo 5 caracteres e no máximo 100'
    })
    @IsString()
    nome: string;

    @IsNotEmpty({
        message:'O produto deve ter um preço'
    })
    @IsNumber()
    preco: number;
    
    @IsNotEmpty({
        message:'O produto deve ter uma quantidade em estoque'
    })
    @IsInt()
    quantidade: number

    @IsNotEmpty({
        message:'O produto deve ter um link para uma imagem'
    })
    @IsString()
    imagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
}