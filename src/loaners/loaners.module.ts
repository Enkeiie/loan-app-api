import { Module } from '@nestjs/common';
import { LoanersService } from './loaners.service';
import { LoanersController } from './loaners.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [LoanersController],
  providers: [LoanersService,PrismaService],
})
export class LoanersModule {}
