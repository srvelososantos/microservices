import { EntitySubscriberInterface, UpdateEvent, DataSource } from 'typeorm';
import { Machine } from './entities/machine.entity';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class MachineSubscriber implements EntitySubscriberInterface<Machine>, OnModuleInit {
  
  private client: ClientProxy;

  constructor(
    private readonly dataSource: DataSource,
    private readonly moduleRef: ModuleRef,
  ) {}

  onModuleInit() {
    // Registrar o subscriber no datasource AQUI (dataSource já está pronto)
    this.dataSource.subscribers.push(this);

    this.client = this.moduleRef.get<ClientProxy>('SERVICES_SERVICE', { strict: false });
  }

  listenTo() {
    return Machine;
  }

  async afterUpdate(event: UpdateEvent<Machine>) {
    if (!event.entity || !event.databaseEntity) return;

    const novoStatus = event.entity.status;
    const statusAntigo = event.databaseEntity.status;

    if (statusAntigo !== 'quebrado' && novoStatus === 'quebrado') {

      console.log(`[Subscriber] Detectada quebra: ${event.entity.id}`);

      this.client.emit('queue_services', {
        id: event.entity.id,
        status: 'CRITICAL_FAILURE'
      }).subscribe();
    }
  }
}
