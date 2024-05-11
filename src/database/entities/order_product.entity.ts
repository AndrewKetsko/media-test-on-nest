import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;
  //   @Column()
  //   document_id: string;

  //   @Column()
  //   product_id: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, (order) => order.products)
  @JoinColumn({ name: 'document_id' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderProduct)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
