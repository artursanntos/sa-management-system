import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Produto } from '@prisma/client'
import { UpdateProdutoDTO } from './dto/update-produto.dto'
import { CreateProdutoDTO } from './dto/create-produto.dto';

@Injectable()
export class ProdutoService {

    constructor(private prisma: PrismaService) {}

    async create(data: CreateProdutoDTO): Promise<Produto> {

        const produtoExists = await this.prisma.produto.findUnique({
            where: {
                nome: data.nome
            }
        })

        if (produtoExists) {
            throw new Error('Este produto já existe');
        }

        return await this.prisma.produto.create({
            data,
        });
    }

    async delete(id: string): Promise<Produto[]> {

        const produtoExists = await this.prisma.produto.findUnique({
            where: {
                id: id,
            },
        })

        if (!produtoExists) {
            throw new Error('Este produto não existe e, portanto, não pode ser excluído');
        }

        await this.prisma.produto.delete({
            where: {
                id: id,
            },
        });
        return await this.findAll()
    }

    async update(id: string, data: UpdateProdutoDTO): Promise<Produto> {

        const produtoExists = await this.prisma.produto.findUnique({
            where: {
                id: id,
            },
        })

        if (!produtoExists) {
            throw new Error('Este produto não existe e, portanto, não pode ser alterado');
        }

        return await this.prisma.produto.update({
            data,
            where: {
                id,
            },
        })
    }

    async findAll(): Promise<Produto[]> {
        return this.prisma.produto.findMany();
    }

    async findProduto(id: string): Promise<Produto | null> {
        return this.prisma.produto.findUnique({
            where: {
                id,
            },
        });
    }

    async buyProduto(id: string): Promise<Produto | null> {

        const produtoAtual = await this.prisma.produto.findUnique({
            where: {
                id: id,
            },
        })

        if (!produtoAtual) {
            throw new Error('Este produto não existe e, portanto, não pode ser comprado.');
        } else if (produtoAtual.quantidade == 0){
            throw new Error('Este produto não está disponível no estoque.')
        }

        const newQuantity: UpdateProdutoDTO = {
            "quantidade": produtoAtual.quantidade - 1
        }

        return await this.update(id, newQuantity)

    }
}
