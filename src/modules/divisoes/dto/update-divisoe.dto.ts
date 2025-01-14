import { PartialType } from '@nestjs/mapped-types';
import { CreateDivisoeDto } from './create-divisoe.dto';

export class UpdateDivisoeDto extends PartialType(CreateDivisoeDto) {}
