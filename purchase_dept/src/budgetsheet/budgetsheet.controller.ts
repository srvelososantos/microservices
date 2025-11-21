import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetsheetService } from './budgetsheet.service';
import { CreateBudgetsheetDto } from './dto/create-budgetsheet.dto';
import { UpdateBudgetsheetDto } from './dto/update-budgetsheet.dto';

@Controller('budgetsheet')
export class BudgetsheetController {
  constructor(private readonly budgetsheetService: BudgetsheetService) {}

  @Post()
  create(@Body() createBudgetsheetDto: CreateBudgetsheetDto) {
    return this.budgetsheetService.create(createBudgetsheetDto);
  }

  @Get()
  findAll() {
    return this.budgetsheetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetsheetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetsheetDto: UpdateBudgetsheetDto) {
    return this.budgetsheetService.update(+id, updateBudgetsheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetsheetService.remove(+id);
  }
}
