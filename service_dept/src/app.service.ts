import { Injectable } from '@nestjs/common';
import { JobSheetService } from './service/factory/job-sheet.service';

@Injectable()
export class AppService {

  constructor(
    private readonly jobSheetService: JobSheetService
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  jobExecution(msg: string){
    this.jobSheetService.executeJob(msg);  
  }
}
