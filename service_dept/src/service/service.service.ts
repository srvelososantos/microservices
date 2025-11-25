import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';

import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  private readonly logger = new Logger(ServiceService.name);

  constructor(

    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}


  async findAll(): Promise<Service[]> {
    const events = await this.serviceRepository.find()
    if(events.length === 0) throw new HttpException('Requests not found', HttpStatus.NOT_FOUND)
    return events;
  }

  async findOne(id: string): Promise<Service | null> {
    const event = await this.serviceRepository.findOne({
      where: { id }
    })
    if(!event) throw new HttpException('Request Not Found!', HttpStatus.NOT_FOUND)
    return event;
  }
}