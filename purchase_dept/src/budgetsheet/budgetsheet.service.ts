import { Injectable } from '@nestjs/common';
import { CreateBudgetsheetDto } from './dto/create-budgetsheet.dto';
import { UpdateBudgetsheetDto } from './dto/update-budgetsheet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BudgetSheet } from './entities/budgetsheet.entity';

@Injectable()
export class BudgetsheetService {

  constructor(
    @InjectRepository(BudgetSheet)
    private repo: Repository<BudgetSheet> // <--- Note o tipo genérico
  ) {}


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
