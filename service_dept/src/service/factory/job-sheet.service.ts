// 📄 job-sheet.service.ts
import { Injectable } from '@nestjs/common';
import { MachineOperatorFactory, MachineType } from './job-sheet.factory.provider';

@Injectable()
export class JobSheetService {
  constructor(
    private readonly operatorFactory: MachineOperatorFactory,
  ) {}

  async executeJob(job: any) {
    const machineType: MachineType = job.machine_type;

    const operator = this.operatorFactory.create(machineType);

    try {
      await operator.runService(job);
      console.log('Service executed successfully!');
      
    } catch (error) {
      if (error.message === 'BREAKDOWN') {
        console.log('Machine broke! Sending message to purchase service...');
        // Exemplo:
        // this.rabbit.sendToPurchase({ machineType, job });
      } else {
        throw error;
      }
    }
  }
}
