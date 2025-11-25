import { IsIn, IsNumber, IsString } from "class-validator";

export class CreatePurchaseDto {

    @IsString()
    type: string;

    @IsString()
    @IsIn(['pending', 'ready', 'done'], {
        message: 'status must be pending, ready or done'
    })
    status: 'pending' | 'ready' | 'done'

    @IsNumber()
    estimated_price: number;

    @IsString()
    description: string;

}
