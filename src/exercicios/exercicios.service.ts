import { Injectable } from '@nestjs/common';
import { CreateExercicioDto } from './dto/create-exercicio.dto';

@Injectable()
export class ExerciciosService {
  create(createExercicioDto: CreateExercicioDto) {
    return createExercicioDto;
  }

  findAll() {
    return `This action returns all execicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} execicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} execicio`;
  }
}
