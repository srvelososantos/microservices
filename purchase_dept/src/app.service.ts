import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Purchase } from './purchase/entities/purchase.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseService } from 'strategies/purchase.service';

@Injectable()
export class AppService {

  constructor(
    
  ){

  }
  getHello(): string {
    return 'Hello World!';
  }

}
