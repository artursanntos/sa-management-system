import { IsAlphanumeric, IsAscii, IsDate, IsDateString, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator"

export class UpdateProdutoDTO {
    id?: string;

    @IsOptional()
    @Length(5,100, {
        message:'O nome deve ter no mínimo 5 caracteres e no máximo 100'
    })
    @IsString()
    nome?: string;

    @IsOptional()
    @IsNumber()
    preco?: number;
    
    @IsOptional()
    @IsInt()
    quantidade?: number

    @IsOptional()
    @IsString()
    imagem?: string
    createdAt?: Date | string
    updatedAt?: Date | string
}