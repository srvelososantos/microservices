import { Module } from '@nestjs/common';
import { BudgetsheetService } from './budgetsheet.service';
import { BudgetsheetController } from './budgetsheet.controller';

@Module({
  controllers: [BudgetsheetController],
  providers: [BudgetsheetService],
})
export class BudgetsheetModule {}
