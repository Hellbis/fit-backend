import { Module } from '@nestjs/common';
import { ExerciciosModule } from './modules/exercicios/exercicios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
