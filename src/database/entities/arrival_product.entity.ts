import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Arrival } from './arrival.entity';
import { Product } from './product.entity';

@Entity()
export class ArrivalProduct {
  @PrimaryGeneratedColumn()
  id: number;
  //   @Column()
  //   document_id: string;

  // @Column()
  // product_id: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Arrival, (arrival) => arrival.products)
  @JoinColumn({ name: 'document_id' })
  arrival: Arrival;

  @ManyToOne(() => Product, (product) => product.orderProduct)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
