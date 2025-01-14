import { Module } from '@nestjs/common';
import { ExerciciosModule } from './modules/exercicios/exercicios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { DivisoesModule } from './modules/divisoes/divisoes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    ExerciciosModule,
    DivisoesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
