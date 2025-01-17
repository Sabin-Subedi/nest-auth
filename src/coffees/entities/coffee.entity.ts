import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;
}
