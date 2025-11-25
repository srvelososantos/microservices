import { Injectable } from '@nestjs/common';
import { MachineFactory } from './machine.factory';
import { MachineType } from './machines.model';

@Injectable()
export class JobService {
  constructor(private readonly machineFactory: MachineFactory) {}

  async executeJob(job: any) {
    console.log(`Iniciando job para: ${job.machine_type}`);

    try {
      // 1. A Fábrica cria a instância já com os dados dentro
      const operator = this.machineFactory.create(job.machine_type as MachineType, job);

      // 2. Executa
      await operator.runService();
      
      console.log('Serviço concluído com sucesso!');

    } catch (error) {
      if (error.message === 'BREAKDOWN') {
        console.error('🚨 A MÁQUINA QUEBROU! Enviando mensagem para compras...');
        // this.rabbitMq.emit(...)
      } else {
        throw error; // Se for outro erro, repassa
      }
    }
  }
}