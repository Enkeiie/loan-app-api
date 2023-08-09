import { Test, TestingModule } from '@nestjs/testing';
import { LoanersController } from './loaners.controller';
import { LoanersService } from './loaners.service';

describe('LoanersController', () => {
  let controller: LoanersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanersController],
      providers: [LoanersService],
    }).compile();

    controller = module.get<LoanersController>(LoanersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
