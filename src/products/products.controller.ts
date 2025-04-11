import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Put,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { Product } from './interfaces/product/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAll();
  }

  @Get('hello')
  getHelloInProducts(): string {
    return 'Estamos en productos!!!';
  }

  @Get('hot')
  getSpecialProducts(): string {
    return 'Te·vamos·a·mostrar·los·productos·más·calientes!!';
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.productsService.getId(id);
  }

  @Get(':id/:size')
  findWithSize(@Param('id') id: number, @Param('size') size: string) {
    return `Página de detalle de producto ${id}, en tamaño ${size}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createProduct(@Body() body) {
    this.productsService.insert(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.productsService.delete(id);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: number, @Body() body: any) {
    return `Actualización parcial del ítem ${id}`;
  }

  @Get('ruta-error-404')
  @HttpCode(HttpStatus.NOT_FOUND)
  rutaConError404() {
    return 'Esto es un error 404!!';
  }

  @Get('query')
  rutaQuery(@Query('x') x: string) {
    return `El dato query.x ha recibido el valor ${x}`;
  }

  @Get('cars')
  carsQuery(@Query('count', ParseIntPipe) carCount: number) {
    return carCount;
  }
}
