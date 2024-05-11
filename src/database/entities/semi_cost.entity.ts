import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class SemiCost {
  @PrimaryGeneratedColumn()
  ids: number;
  //   @Column()
  //   id: string;

  @Column()
  date: string;

  @Column()
  value: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'id' })
  product: Product;
}
