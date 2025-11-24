import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @EventPattern('queue_services')
  async handleMachineBreak(@Payload() data: any){
    console.log(`rabbitmq avisou: Chegou maquina quebrada ${data}`)

    //criar nova compra e coloca-la como pendente
    
    console.log(`servico ${data} aguardando para ser realizado`)
  }

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseService.create(createPurchaseDto);
  }

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseService.update(+id, updatePurchaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseService.remove(+id);
  }
}
