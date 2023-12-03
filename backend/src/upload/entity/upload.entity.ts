import { CommonEntity } from 'src/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Upload extends CommonEntity {
  @Column()
  name: string;
  @Column()
  type: string;
  @Column()
  size: number;
  @Column()
  url: string;
}
