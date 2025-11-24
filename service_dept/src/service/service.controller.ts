import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ServiceService } from './service.service';

@Controller()
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @EventPattern('purchase_created')
  async handlePurchaseCreated(@Payload() data: any) {
    // Repassa para o service tratar a lógica de negócio
    this.serviceService.handlePurchaseCreated(data);
  }
}