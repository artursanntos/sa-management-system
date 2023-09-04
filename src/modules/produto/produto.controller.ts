import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { UpdateProdutoDTO } from './dto/update-produto.dto';
import { CreateProdutoDTO } from './dto/create-produto.dto';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Post()
    async createProduto(@Body() produto: CreateProdutoDTO) {
        return this.produtoService.create(produto);
    }   
    
    @Delete(':id')
    async deleteProduto(@Param('id') id: string) {
        return this.produtoService.delete(id)
    }

    @Get()
    async findAll() {
        return this.produtoService.findAll();
    }

    @Get(':id')
    async findProduto(@Param('id') id: string) {
        return this.produtoService.findProduto(id)
    }

    @Put(':id')
    async updateProduto(@Param('id') id: string, @Body() data: UpdateProdutoDTO) {
        return this.produtoService.update(id, data)
    }

    @Patch(':id')
    async buyProduto(@Param('id') id: string) {
        return this.produtoService.buyProduto(id)
    }
}
