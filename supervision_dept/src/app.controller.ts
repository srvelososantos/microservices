import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('NOTIFICATIONS_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  realizarNotificacao(@Body() notification: {id, endereco, fonte, multa, prazo}){
    this.client.emit('notification_created', notification);
    return { message: `notificacao processada, ${notification.endereco}` };
  }
}
