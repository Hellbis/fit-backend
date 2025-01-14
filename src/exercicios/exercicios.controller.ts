import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExerciciosService } from './exercicios.service';
import { CreateExercicioDto } from './dto/create-exercicio.dto';

@Controller('exercicios')
export class ExerciciosController {
  constructor(private readonly exerciciosService: ExerciciosService) {}

  @Post()
  create(@Body() createExercicioDto: CreateExercicioDto) {
    return this.exerciciosService.create(createExercicioDto);
  }

  @Get()
  findAll() {
    return this.exerciciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciciosService.findOne(+id);
  }
}
