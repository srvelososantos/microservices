import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all request`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
