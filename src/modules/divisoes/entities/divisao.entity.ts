import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Divisoes')
export class Divisao {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nome: string;

  @Column({ unique: true })
  Ativo: boolean;
}
