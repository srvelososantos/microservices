import { EventSubscriber, EntitySubscriberInterface, UpdateEvent, DataSource } from 'typeorm';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Machine } from './entities/machine.entity'; // Sua entidade

@EventSubscriber()
export class MachineSubscriber implements EntitySubscriberInterface<Machine> {
  
  // Injete o RabbitMQ aqui (talvez precise usar ModuleRef se der erro de dependência circular)
  constructor(
    dataSource: DataSource,
    @Inject('SERVICES_SERVICE') private readonly client: ClientProxy
  ) {
    dataSource.subscribers.push(this);
  }

  // Diz ao TypeORM: "Escute apenas a entidade Machine"
  listenTo() {
    return Machine;
  }

  // Esse método roda DEPOIS de qualquer update no banco
  async afterUpdate(event: UpdateEvent<Machine>) {
    if (!event.entity || !event.databaseEntity) {
      return;
    }
    // O TypeORM te dá o objeto 'entity' (novo) e o 'databaseEntity' (antigo, como estava no banco)
    
    const novoStatus = event.entity.status;
    const statusAntigo = event.databaseEntity.status;

    // Lógica de detecção de mudança
    if (statusAntigo !== 'quebrado' && novoStatus === 'quebrado') {
       
       console.log(`[Subscriber] Detectada quebra na máquina ${event.entity.id}`);
       
       // Dispara a mensagem (Lembre do .subscribe() ou lastValueFrom)
       this.client.emit('queue_services', { 
         id: event.entity.id, 
         status: 'CRITICAL_FAILURE' 
       }).subscribe();
    }
  }
}