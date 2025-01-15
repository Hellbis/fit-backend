import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Treino {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nome: string;
}
