import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Treino } from './entities/treino.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TreinosService {
  constructor(
    @InjectRepository(Treino)
    private readonly treinosRepository: Repository<Treino>,
  ) {}

  async create(createTreinoDto: CreateTreinoDto) {
    const treino = new Treino();

    Object.assign(treino, createTreinoDto as Treino);

    return await this.treinosRepository.save(treino);
  }

  async findAll() {
    return await this.treinosRepository.find();
  }

  async findOne(id: number) {
    const treino = await this.treinosRepository.findOneBy({
      Id: id,
    });

    if (!treino) throw new NotFoundException('Treino não encontrado');

    return treino;
  }

  async update(id: number, updateTreinoDto: UpdateTreinoDto) {
    const treino = await this.treinosRepository.findOneBy({
      Id: id,
    });

    if (!treino) throw new NotFoundException('Treino não encontrado');

    Object.assign(treino, updateTreinoDto as Treino);

    return await this.treinosRepository.save(treino);
  }

  async remove(id: number) {
    const result = await this.treinosRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException('Treino não encontrado');
    }
  }
}
