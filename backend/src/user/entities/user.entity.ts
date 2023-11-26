import { Roles } from 'src/app.roles';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  name: string;
  @Column({ default: '' })
  email: string;
  @Column()
  password: string;

  @Column({ default: Roles.STUDENT })
  role: Roles;
}
