import { Inject, Injectable, Logger } from '@nestjs/common';
import { MachineFactory } from './service/factory/machine.factory';
import { MachineType } from './service/factory/machines.model';
import { ClientProxy } from '@nestjs/microservices';
import { Service } from './service/entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './service/dto/create-service.dto';

@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly machineFactory: MachineFactory,
    @Inject('SERVICES_SERVICE') private readonly client: ClientProxy,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  async jobExecution(jobData: any) {
    this.logger.log(`⚙️ Iniciando execução para: ${jobData.machineType}`);

    try {
      // 2. A Fábrica decide qual classe instanciar (FrontEndLoader, Backhoe, etc)
      // e já preenche ela com os dados do jobData via construtor.
      const maquina = this.machineFactory.create(
        jobData.machineType as MachineType, 
        jobData
      );

      // 3. Executamos a lógica (cálculos, logs, validações)
      await maquina.runService();
      
      this.logger.log(`✅ Serviço finalizado com sucesso!`);

      await this.create(jobData.description, jobData.location)

    } catch (error) {
      // 4. Tratamento de Erro (A Quebra da Máquina)
      if (error.message === 'BREAKDOWN') {
        this.handleMachineBreakdown(jobData);
      } else {
        // Se for outro erro (ex: tipo desconhecido), estoura o erro pra cima
        this.logger.error(`Erro inesperado: ${error.message}`);
      }
    }
  }

  // Método auxiliar para tratar a quebra
  private handleMachineBreakdown(jobData: any) {
    this.logger.warn(`🚨 A MÁQUINA QUEBROU DURANTE O SERVIÇO! ENDEREÇO: ${jobData.description}`);
    
    // AQUI você vai colocar o envio para o RabbitMQ (Compras) futuramente
    // this.client.emit('notificar_compras', { ... })

    const estimated_price = Math.floor(Math.random() * 15000)
    const description = 'Break Machine Description example'
    this.client.emit('notification_created', {estimated_price, description});
    return { message: `Notificaçao enviada para o setor de COMPRAS.` };
  }

  //para criacao do service
  async create(description: string, location: string) {
    const createdService = this.serviceRepository.create({
      description,
      location
    });
    await this.serviceRepository.save(createdService);
  }
}
