import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(
    private readonly serviceService: ServiceService,
    @Inject('SERVICES_SERVICE') private readonly client: ClientProxy
  ) {}

  // @Post('/new')
  // realizarNotificacao(@Body() createrequestdto: CreateServiceDto){

  //   const done = this.serviceService.create(createrequestdto)
  //   this.client.emit('notification_created', createrequestdto);
  //   return { message: `Notificaçao enviada para o setor de serviços.` };
  // }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }
}