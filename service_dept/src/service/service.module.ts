import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { JobSheetFactory } from './factory/job-sheet.factory';
import { Service } from './entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Service])],
  controllers: [ServiceController],
  providers: [ServiceService, JobSheetFactory], // Factory registrada aqui
})
export class ServiceModule {}