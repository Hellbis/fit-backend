import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Exercicio')
export class Exercicio {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 200 })
  Nome: string;

  @Column({ length: 300 })
  Url: string;

  @Column({ length: 300 })
  Pesos: string;
}
