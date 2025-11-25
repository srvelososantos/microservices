import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private readonly purchaseRepository: Repository<Purchase>,
  ){

  }
  create(createPurchaseDto: CreatePurchaseDto) {
    return 'This action adds a new purchase';
  }

  async findAll(): Promise<Purchase[]> {
    const events = await this.purchaseRepository.find()
    if(events.length === 0) throw new HttpException('Requests not found', HttpStatus.NOT_FOUND)
    return events;
  }

  async findOne(id: string): Promise<Purchase | null> {
    const event = await this.purchaseRepository.findOne({
      where: { id }
    })
    if(!event) throw new HttpException('Request Not Found!', HttpStatus.NOT_FOUND)
    return event;
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return `This action updates a #${id} purchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
