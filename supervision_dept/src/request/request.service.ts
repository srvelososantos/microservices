import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {

  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  )
  {}
  async create(createRequestDto: CreateRequestDto) {
    const createdNotification = this.requestRepository.create({
      ...createRequestDto
    });
    await this.requestRepository.save(createdNotification);
    return createdNotification;
  }

  async findAll(): Promise<Request[]> {
    const events = await this.requestRepository.find()
    if(events.length === 0) throw new HttpException('Requests not found', HttpStatus.NOT_FOUND)
    return events;
  }

  async findOne(id: string): Promise<Request | null> {
    const event = await this.requestRepository.findOne({
      where: { id }
    })
    if(!event) throw new HttpException('Request Not Found!', HttpStatus.NOT_FOUND)
    return event;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
