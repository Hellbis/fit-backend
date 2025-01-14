import { Module } from '@nestjs/common';
import { DivisoesService } from './divisoes.service';
import { DivisoesController } from './divisoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Divisao } from './entities/divisao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Divisao])],
  controllers: [DivisoesController],
  providers: [DivisoesService],
})
export class DivisoesModule {}
