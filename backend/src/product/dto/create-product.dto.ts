import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    type: String,
  })
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  category: string;
}
