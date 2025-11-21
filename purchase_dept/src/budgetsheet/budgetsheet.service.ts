import { Injectable } from '@nestjs/common';
import { CreateBudgetsheetDto } from './dto/create-budgetsheet.dto';
import { UpdateBudgetsheetDto } from './dto/update-budgetsheet.dto';

@Injectable()
export class BudgetsheetService {
  create(createBudgetsheetDto: CreateBudgetsheetDto) {
    return 'This action adds a new budgetsheet';
  }

  findAll() {
    return `This action returns all budgetsheet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetsheet`;
  }

  update(id: number, updateBudgetsheetDto: UpdateBudgetsheetDto) {
    return `This action updates a #${id} budgetsheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetsheet`;
  }
}
