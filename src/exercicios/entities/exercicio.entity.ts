import { Entity } from 'typeorm';

@Entity('Exercicio')
export class Exercicio {
  Id: number;
  Nome: string;
  Url: string;
}
