import { IsString } from "class-validator"

export class CreateSupervisorDto {

    @IsString()
    name: string

    @IsString() // coverage area
    area: string
}
