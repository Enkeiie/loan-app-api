import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService){}

  create(data: CreateLoanDto) {
    return this.prisma.client.loan.create({
      data: {
        value: data.value,
        loaner: { connect: {id: data.loanerId} }
      }
    });
  }

  findAll() {
    return this.prisma.client.loan.findMany({ include: {
      loaner: true,
    }});
  }

  findOne(id: string) {
    return this.prisma.client.loan.findUnique({where: {id}, include: {
      loaner: true,
    } });
  }

  update(id: string, data: UpdateLoanDto) {
    return this.prisma.client.loan.update({ where: {id}, data});
  }

  remove(id: string) {
    return this.prisma.client.loan.delete({ where: {id} });
  }
}
