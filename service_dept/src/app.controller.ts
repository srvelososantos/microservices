import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private notifications = [
    { id: 1, end: 'rua augusta' }
  ]

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  listNotifications(){
    return this.notifications
  }

  @EventPattern('notification_created')
  async processNotification(@Payload() job: any){
    const { deadline, description, location, machineType, status } = job;

    setTimeout(() => {
      this.appService.jobExecution(machineType)
    }, 4000); // 2000 milliseconds = 2 seconds

    console.log(`[RabbitMq] [from:Supervision Dept]: servico ${description} aguardando para ser realizado`)
  }

  

  //na execuçao dos serviços
  //if maquina status ocupada, entao colocar em uma fila que tenta executar a cada 5 segundos
  //senao manda fazer o serviço e fala que o serviço vai deixar a maquina ocupada por 8 segundos
}
