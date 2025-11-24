import { IsString } from "class-validator"

export class CreateMachineDto {
    @IsString()
    brand: string

    @IsString()
    model: string
    
    @IsString()
    status: string
}
