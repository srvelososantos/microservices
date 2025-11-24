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
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'queue_supervision',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  exports: [ClientsModule], // <--- Exporta para quem importar este módulo usar
})
export class RabbitMqModule {}