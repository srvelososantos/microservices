import { Injectable, Logger } from '@nestjs/common';
import { JobSheetFactory } from './factory/job-sheet.factory';

@Injectable()
export class ServiceService {
  private readonly logger = new Logger(ServiceService.name);

  constructor(private jobSheetFactory: JobSheetFactory) {}

  handlePurchaseCreated(purchaseData: any) {
    this.logger.log(`Nova compra recebida via RabbitMQ: ${JSON.stringify(purchaseData)}`);

    const ficha = this.jobSheetFactory.createJobSheet(purchaseData);

    this.logger.log(`Ficha criada: ${ficha.description} | Prioridade: ${ficha.priority}`);
    this.logger.log(`Instruções: ${ficha.generateInstructions()}`);
    
    // this.repository.save(ficha);
  }
}