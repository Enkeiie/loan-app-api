import { Injectable } from '@nestjs/common';
import { CreateLoanerDto } from './dto/create-loaner.dto';
import { UpdateLoanerDto } from './dto/update-loaner.dto';

@Injectable()
export class LoanersService {
  create(createLoanerDto: CreateLoanerDto) {
    return 'This action adds a new loaner';
  }

  findAll() {
    return `This action returns all loaners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loaner`;
  }

  update(id: number, updateLoanerDto: UpdateLoanerDto) {
    return `This action updates a #${id} loaner`;
  }

  remove(id: number) {
    return `This action removes a #${id} loaner`;
  }
}
