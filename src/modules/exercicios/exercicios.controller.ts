import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ExerciciosService } from './exercicios.service';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExecicioDto } from './dto/update-exercicio.dto';

@Controller('exercicios')
export class ExerciciosController {
  constructor(private readonly exerciciosService: ExerciciosService) {}

  @Post()
  create(@Body() createExercicioDto: CreateExercicioDto) {
    return this.exerciciosService.create(createExercicioDto);
  }

  @Get()
  async findAll() {
    return await this.exerciciosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.exerciciosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateExecicioDto: UpdateExecicioDto,
  ) {
    return this.exerciciosService.update(id, updateExecicioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.exerciciosService.findOne(id);
  }
}
