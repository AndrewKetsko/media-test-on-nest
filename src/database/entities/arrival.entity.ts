import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArrivalProduct } from './arrival_product.entity';

@Entity()
export class Arrival {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @OneToMany(() => ArrivalProduct, (product) => product.arrival)
  products: ArrivalProduct[];
}
