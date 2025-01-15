import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Treinos')
export class Treino {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nome: string;
}
