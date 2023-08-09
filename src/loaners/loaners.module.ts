import { Module } from '@nestjs/common';
import { LoanersService } from './loaners.service';
import { LoanersController } from './loaners.controller';

@Module({
  controllers: [LoanersController],
  providers: [LoanersService],
})
export class LoanersModule {}
