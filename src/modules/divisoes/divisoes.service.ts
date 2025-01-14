import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDivisoeDto } from './dto/create-divisoe.dto';
import { UpdateDivisoeDto } from './dto/update-divisoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Divisao } from './entities/divisao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DivisoesService {
  constructor(
    @InjectRepository(Divisao)
    private readonly divisoesRepository: Repository<Divisao>,
  ) {}

  async create(createDivisoeDto: CreateDivisoeDto) {
    const divisao = new Divisao();

    Object.assign(divisao, createDivisoeDto as Divisao);

    return await this.divisoesRepository.save(createDivisoeDto);
  }

  async findAll() {
    return await this.divisoesRepository.find();
  }

  async findOne(id: number) {
    const divisao = await this.divisoesRepository.findOneBy({
      Id: id,
    });

    if (!divisao) throw new NotFoundException('Divisão não encontrada');

    return divisao;
  }

  async update(id: number, updateDivisoeDto: UpdateDivisoeDto) {
    const divisao = await this.divisoesRepository.findOneBy({
      Id: id,
    });

    if (!divisao) throw new NotFoundException('Divisão não encontrada');

    Object.assign(divisao, updateDivisoeDto);

    return await this.divisoesRepository.save(divisao);
  }

  async remove(id: number) {
    const result = await this.divisoesRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException('Divisão não encontrada');
    }
  }
}
