import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('request')
export class RequestController {
  constructor(
    private readonly requestService: RequestService,
    @Inject('NOTIFICATIONS_SERVICE') private readonly client: ClientProxy,
    
  ) {}

  @Post('/new')
  realizarNotificacao(@Body() createrequestdto: CreateRequestDto){

    const done = this.requestService.create(createrequestdto)
    this.client.emit('notification_created', createrequestdto);
    return { message: `Notificaçao enviada para o setor de serviços.` };
  }

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll() {
    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
