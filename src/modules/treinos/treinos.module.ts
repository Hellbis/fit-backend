import { Module } from '@nestjs/common';
import { TreinosService } from './treinos.service';
import { TreinosController } from './treinos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treino } from './entities/treino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Treino])],
  controllers: [TreinosController],
  providers: [TreinosService],
})
export class TreinosModule {}
