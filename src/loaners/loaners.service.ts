import { Injectable } from '@nestjs/common';
import { CreateLoanerDto } from './dto/create-loaner.dto';
import { UpdateLoanerDto } from './dto/update-loaner.dto';
import { Loaner } from 'src/loaners/entities/loaner.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LoanersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLoanerDto): Promise<Loaner> {
    return this.prisma.client.loaner.create({ data });
  }

  async findAll(): Promise<Loaner[]> {
    return this.prisma.client.loaner.findMany();
  }
  async findOne(id: string): Promise<Loaner | null> {
    return this.prisma.client.loaner.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateLoanerDto): Promise<Loaner | null> {
    return this.prisma.client.loaner.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Loaner | null> {
    return this.prisma.client.loaner.delete({ where: { id } });
  }
}
