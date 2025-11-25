// 📄 job-sheet.module.ts
import { Module } from '@nestjs/common';
import { MachineOperatorFactory } from './job-sheet.factory.provider';
import { JobSheetService } from './job-sheet.service';

@Module({
  providers: [
    MachineOperatorFactory,  // Factory
    JobSheetService,          // Serviço executor
  ],
  exports: [JobSheetService],
})
export class JobSheetModule {}
