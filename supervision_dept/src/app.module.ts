import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RequestModule } from './request/request.module';
import { SupervisorModule } from './supervisor/supervisor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'NOTIFICATIONS_SERVICE', // Nome para injeção de dependência
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'queue_supervision', // Nome da fila
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
    RequestModule,
    SupervisorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
