import { IsIn, IsNumber, IsString } from 'class-validator'

export class CreateRequestDto {

    @IsNumber()
    deadline: number

    @IsString()
    street: string

    @IsNumber()
    number: number

    @IsNumber()
    zip_code: number

    @IsString()
    @IsIn(['supervisor', 'other'], { message: 'source must be supervisor or other' }) 
    source: 'supervisor' | 'other'

    @IsString()
    @IsIn(['pending', 'done'], { message: 'status must be pending or done' }) 
    status: 'pending' | 'done'
}
