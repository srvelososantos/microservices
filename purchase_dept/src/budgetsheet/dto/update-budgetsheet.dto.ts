import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetsheetDto } from './create-budgetsheet.dto';

export class UpdateBudgetsheetDto extends PartialType(CreateBudgetsheetDto) {}
