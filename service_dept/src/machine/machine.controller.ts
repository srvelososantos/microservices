import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService, @Inject('SERVICES_SERVICE') private readonly client: ClientProxy) {}

  @Post('/new')
  realizarNotificacao(@Body() createmachinedto: CreateMachineDto){

    const done = this.machineService.create(createmachinedto)
    this.client.emit('notification_created', createmachinedto);
    return { message: `Notificaçao enviada para o setor de compras.` };
  }

  @Post()
  create(@Body() createMachineDto: CreateMachineDto) {
    return this.machineService.create(createMachineDto);
  }

  @Get()
  findAll() {
    return this.machineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machineService.update(id, updateMachineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineService.remove(+id);
  }
}
