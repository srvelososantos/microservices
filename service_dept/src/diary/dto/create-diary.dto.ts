import { IsString } from "class-validator";

export class CreateDiaryDto {

    @IsString()
    description: string
}
