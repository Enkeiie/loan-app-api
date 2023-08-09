import { PartialType } from '@nestjs/mapped-types';
import { CreateLoanerDto } from './create-loaner.dto';

export class UpdateLoanerDto extends PartialType(CreateLoanerDto) {}
