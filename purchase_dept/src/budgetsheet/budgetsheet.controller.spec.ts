import { Test, TestingModule } from '@nestjs/testing';
import { BudgetsheetController } from './budgetsheet.controller';
import { BudgetsheetService } from './budgetsheet.service';

describe('BudgetsheetController', () => {
  let controller: BudgetsheetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetsheetController],
      providers: [BudgetsheetService],
    }).compile();

    controller = module.get<BudgetsheetController>(BudgetsheetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
