import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanersService } from './loaners.service';
import { CreateLoanerDto } from './dto/create-loaner.dto';
import { UpdateLoanerDto } from './dto/update-loaner.dto';

@Controller('loaners')
export class LoanersController {
  constructor(private readonly loanersService: LoanersService) {}

  @Post()
  create(@Body() createLoanerDto: CreateLoanerDto) {
    return this.loanersService.create(createLoanerDto);
  }

  @Get()
  findAll() {
    return this.loanersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanerDto: UpdateLoanerDto) {
    return this.loanersService.update(id, updateLoanerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanersService.remove(id);
  }
}
