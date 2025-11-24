import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('notification_created')
  async processNotification(@Payload() data: any){
    console.log(`rabbitmq avisou: Chegou notificacao ${data}`)

    //criar nova compra e coloca-la como pendente
    
    console.log(`servico ${data} aguardando para ser realizado`)
  }
  
}
