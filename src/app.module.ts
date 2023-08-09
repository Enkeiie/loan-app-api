import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansModule } from './loans/loans.module';
import { LoanersModule } from './loaners/loaners.module';

@Module({
  imports: [LoansModule, LoanersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
