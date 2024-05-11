import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { OrderProduct } from './order_product.entity';
import { ArrivalProduct } from './arrival_product.entity';
import { SemiCost } from './semi_cost.entity';

@Entity()
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProduct: OrderProduct[];

  @OneToMany(() => ArrivalProduct, (arrivalProduct) => arrivalProduct.product)
  arrivalProduct: ArrivalProduct[];

  @OneToMany(() => SemiCost, (semicost) => semicost.product)
  semiCost: SemiCost[];
}
