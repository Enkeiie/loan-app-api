import { Test, TestingModule } from '@nestjs/testing';
import { LoanersService } from './loaners.service';

describe('LoanersService', () => {
  let service: LoanersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanersService],
    }).compile();

    service = module.get<LoanersService>(LoanersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
