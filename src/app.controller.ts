import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './dto/product.dto';
import { ArrivalDto } from './dto/arrival.dto';
import { OrderDto } from './dto/order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('products')
  postProducts(@Body() product: ProductDto) {
    return this.appService.postProducts(product);
  }

  @Post('arrivals')
  postArrivals(@Body() arrival: ArrivalDto) {
    return this.appService.postArrivals(arrival);
  }

  @Post('orders')
  postOrders(@Body() order: OrderDto) {
    return this.appService.postOrders(order);
  }

  @Get('cost/:id')
  getcCost(@Param('id', ParseIntPipe) id: number, @Query('date') date: string) {
    return this.appService.getcCost(id, date);
  }

  @Get('report')
  getReport(@Query('from') from: string, @Query('to') to: string) {
    return this.appService.getReport(from, to);
  }
}
