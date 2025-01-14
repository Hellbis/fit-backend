import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { DivisoesService } from './divisoes.service';
import { CreateDivisoeDto } from './dto/create-divisoe.dto';
import { UpdateDivisoeDto } from './dto/update-divisoe.dto';

@Controller('divisoes')
export class DivisoesController {
  constructor(private readonly divisoesService: DivisoesService) {}

  @Post()
  async create(@Body() createDivisoeDto: CreateDivisoeDto) {
    return await this.divisoesService.create(createDivisoeDto);
  }

  @Get()
  async findAll() {
    return await this.divisoesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.divisoesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDivisoeDto: UpdateDivisoeDto,
  ) {
    return await this.divisoesService.update(id, updateDivisoeDto);
  }

  @Patch(':id/active')
  async active(@Param('id') id: number) {
    return await this.divisoesService.active(id);
  }

  @Patch(':id/inactive')
  async inactive(@Param('id') id: number) {
    return await this.divisoesService.active(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.divisoesService.findOne(id);
  }
}
