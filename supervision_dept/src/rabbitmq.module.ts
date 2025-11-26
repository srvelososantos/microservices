import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    // para iniciar uma fila no rabbitmq e enviar mensagens
    ClientsModule.register([
      {
        name: 'NOTIFICATIONS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@rabbitmq:5672'],
          queue: 'queue_supervision',
          queueOptions: { 
            durable: true,
            arguments: {
              'x-dead-letter-exchange': '',
              'x-dead-letter-routing-key': 'queue_supervision_dlq'
            }
          },
          retryAttempts: 30,   // tenta reconectar
          retryDelay: 5000,
        },
      },
    ]),
  ],
  exports: [ClientsModule], 
})
export class RabbitMqModule {}