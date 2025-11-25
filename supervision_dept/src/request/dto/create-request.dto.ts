import { IsIn, IsNumber, IsString } from 'class-validator'

export class CreateRequestDto {

    @IsNumber()
    deadline: number

    @IsString()
    description: string

    @IsString()
    location: string

    @IsString()
    machineType: string

    @IsString()
    @IsIn(['pending', 'done'], { message: 'status must be pending or done' }) 
    status: 'pending' | 'done'
}
