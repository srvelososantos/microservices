import { Test, TestingModule } from '@nestjs/testing';
import { BudgetsheetService } from './budgetsheet.service';

describe('BudgetsheetService', () => {
  let service: BudgetsheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetsheetService],
    }).compile();

    service = module.get<BudgetsheetService>(BudgetsheetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
