import { Injectable, BadRequestException } from '@nestjs/common';
import { 
  MachineOperator, 
  MachineType, 
  FrontEndLoader, 
  Backhoe, 
  LawnMower, 
  DeliverTruck 
} from './machines.model';

@Injectable()
export class MachineFactory {
  
  // Recebe o TIPO e os DADOS do job
  create(type: MachineType, data: any): MachineOperator {
    switch (type) {
      case 'FRONT_END_LOADER':
        return new FrontEndLoader(data);
      case 'BACKHOE':
        return new Backhoe(data);
      case 'LAWN_MOWER':
        return new LawnMower(data);
      case 'DELIVER_TRUCK':
        return new DeliverTruck(data);
      default:
        throw new BadRequestException(`Tipo de máquina desconhecido: ${type}`);
    }
  }
}