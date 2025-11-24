import { Module } from '@nestjs/common';
import { BudgetsheetService } from './budgetsheet.service';
import { BudgetsheetController } from './budgetsheet.controller';
import { BudgetSheet } from './entities/budgetsheet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([BudgetSheet])],
  controllers: [BudgetsheetController],
  providers: [BudgetsheetService],
})
export class BudgetsheetModule {}
