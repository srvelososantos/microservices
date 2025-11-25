import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('notification_created')
  async processNotification(@Payload() job: any){
    const { deadline, description, location, machineType, status } = job;
    setTimeout(() => {
      this.appService.jobExecution(job)
    }, 4000); // 4000 milliseconds = 2 seconds

    console.log(`[RabbitMq] [from:Supervision Dept]: servico ${description} aguardando para ser realizado`)
  }
}
