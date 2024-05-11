import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class ArrivalDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsArray()
  @IsNotEmpty()
  products: string[];
}
