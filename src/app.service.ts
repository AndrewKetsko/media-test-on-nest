import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ArrivalDto } from './dto/arrival.dto';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class AppService {
  getcCost(id: number, date: string) {}

  getReport(from: string, to: string) {}

  postProducts(product: ProductDto) {}

  postArrivals(arrival: ArrivalDto) {}

  postOrders(order: OrderDto) {}
}
