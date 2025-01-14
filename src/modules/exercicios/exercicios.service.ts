import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercicio } from './entities/exercicio.entity';
import { Repository } from 'typeorm';
import { UpdateExecicioDto } from './dto/update-exercicio.dto';

@Injectable()
export class ExerciciosService {
  constructor(
    @InjectRepository(Exercicio)
    private readonly exerciciosRepository: Repository<Exercicio>,
  ) {}

  async create(createExercicioDto: CreateExercicioDto) {
    const exercicio = new Exercicio();

    Object.assign(exercicio, createExercicioDto as Exercicio);

    return await this.exerciciosRepository.save(createExercicioDto);
  }

  async findAll() {
    return await this.exerciciosRepository.find();
  }

  async findOne(id: number) {
    const exercicio = await this.exerciciosRepository.findOneBy({
      Id: id,
    });

    if (!exercicio) throw new NotFoundException('Exercício não encontrado');

    return exercicio;
  }

  async update(id: number, updateExercicio: UpdateExecicioDto) {
    const exercicio = await this.exerciciosRepository.findOneBy({
      Id: id,
    });

    if (!exercicio) throw new NotFoundException('Exercício não encontrado');

    Object.assign(exercicio, updateExercicio);

    return await this.exerciciosRepository.save(exercicio);
  }

  async remove(id: number) {
    const result = await this.exerciciosRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException('Exercício não encontrado');
    }
  }
}
