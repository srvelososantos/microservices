import { IsNumber, IsString } from "class-validator"

export class CreateBudgetsheetDto {

    @IsString()
    name: string

    @IsNumber()
    available_budget: number

}
