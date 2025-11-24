import { IsString } from "class-validator";

export class CreateProfessionalDto {

    @IsString()
    first_name: string
}
