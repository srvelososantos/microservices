import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { MachineFactory } from './machine.factory';

@Module({
  providers: [JobService, MachineFactory],
  exports: [JobService],
})
export class JobModule {}