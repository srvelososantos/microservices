import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RequestModule } from './request/request.module';
import { SupervisorModule } from './supervisor/supervisor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMqModule } from './rabbitmq.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RabbitMqModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      database: 'super_dept',
      username: 'root',
      password: 'rootpassword',
      synchronize: true,
      autoLoadEntities: true
    }),
    RequestModule,
    SupervisorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
