import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Machine } from './entities/machine.entity';

@Injectable()
export class MachineService {

  constructor(
    @InjectRepository(Machine)
    private readonly machineRepository: Repository<Machine>,
  )
  {}

  async create(createMachineDto: CreateMachineDto) {
    const createdMachine = this.machineRepository.create({
      ...createMachineDto
    });
    await this.machineRepository.save(createdMachine);
    return createdMachine;
  }

  findAll() {
    return `This action returns all machine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }

  async update(id: string, updateMachineDto: UpdateMachineDto) {
    const machine = await this.machineRepository.findOne({
      where: { id }
    });
    
    if(!machine){
      return; 
    }

    Object.assign(machine, updateMachineDto);
    return this.machineRepository.save(machine);
  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }
}