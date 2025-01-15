import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TreinosService } from './treinos.service';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';

@Controller('treinos')
export class TreinosController {
  constructor(private readonly treinosService: TreinosService) {}

  @Post()
  async create(@Body() createTreinoDto: CreateTreinoDto) {
    return await this.treinosService.create(createTreinoDto);
  }

  @Get()
  async findAll() {
    return await this.treinosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.treinosService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTreinoDto: UpdateTreinoDto,
  ) {
    return await this.treinosService.update(id, updateTreinoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.treinosService.findOne(id);
  }
}
