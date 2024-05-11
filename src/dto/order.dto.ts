import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class OrderDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsArray()
  @IsNotEmpty()
  products: string[];
}
