import { Injectable, Logger } from '@nestjs/common';
import { JobSheetFactory } from './factory/job-sheet.factory';
import { CreateServiceDto } from './dto/create-service.dto';

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

  async create(createRequestDto: CreateServiceDto) {
    // const createdNotification = this.requestRepository.create({
    //   ...createRequestDto
    // });
    // await this.requestRepository.save(createdNotification);
    return 1;
  }
}