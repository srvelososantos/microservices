import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'],
      queue: 'queue_supervision', // fila para se conectar a uma determinada fila e receber mensagens enviadas a ela (consumidor)
      queueOptions: { 
        durable: true,
        arguments: {
          'x-dead-letter-exchange': '',
          'x-dead-letter-routing-key': 'queue_supervision_dlq'
        }
      }
    },
  });

  await app.startAllMicroservices();

  await app.listen(process.env.PORT ?? 4001);
}
bootstrap();
