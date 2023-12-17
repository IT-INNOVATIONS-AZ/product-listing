import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  message: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
