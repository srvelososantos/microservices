import { Injectable, Logger } from '@nestjs/common';

import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  private readonly logger = new Logger(ServiceService.name);

  constructor() {}

  

  async create(createRequestDto: CreateServiceDto) {
    // const createdNotification = this.requestRepository.create({
    //   ...createRequestDto
    // });
    // await this.requestRepository.save(createdNotification);
    return 1;
  }
}