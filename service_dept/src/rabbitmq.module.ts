import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    // para iniciar uma fila no rabbitmq e enviar mensagens
    ClientsModule.register([
      {
        name: 'SERVICES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'queue_services',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  exports: [ClientsModule], // <--- Exporta para quem importar este módulo usar
})
export class RabbitMqModule {}