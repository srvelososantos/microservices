// 📄 job-sheet.factory.provider.ts
import { Injectable } from '@nestjs/common';
import {
  MachineOperator,
  FrontEnd_loader,
  Backhoe,
  LawnMower,
  Deliver_truck,
} from './job-sheet.factory';

export type MachineType =
  | 'FRONT_END_LOADER'
  | 'BACKHOE'
  | 'LAWN_MOWER'
  | 'DELIVER_TRUCK';

@Injectable()
export class MachineOperatorFactory {
  create(type: MachineType): MachineOperator {
    switch (type) {
      case 'FRONT_END_LOADER':
        return new FrontEnd_loader();
      case 'BACKHOE':
        return new Backhoe();
      case 'LAWN_MOWER':
        return new LawnMower();
      case 'DELIVER_TRUCK':
        return new Deliver_truck();
      default:
        throw new Error(`Unknown machine operator type: ${type}`);
    }
  }
}
