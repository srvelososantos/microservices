import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { PurchaseService } from 'strategies/purchase.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: PurchaseService
  ) {}

  @EventPattern('notification_created')
  async processNotification(@Payload() job: any){
    const { estimated_price, description } = job;
    setTimeout(() => {
      this.appService.handleNewPurchaseRequest(estimated_price, description)
    }, 4000); // 4000 milliseconds = 2 seconds

    console.log(`[RabbitMq] [from:Services Dept]: compra ${description} aguardando para ser realizado`)
  }
  
}
