import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalModule } from './professional/professional.module';
import { MachineModule } from './machine/machine.module';
import { DiaryModule } from './diary/diary.module';
import { RabbitMqModule } from './rabbitmq.module';
import { MachineSubscriber } from './machine/machine.subscriber';

@Module({
  imports: [
    ServiceModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      database: 'servi_dept',
      username: 'root',
      password: 'rootpassword',
      synchronize: true,
      autoLoadEntities: true,
      subscribers: [MachineSubscriber]
    }),
    ProfessionalModule,
    MachineModule,
    DiaryModule,
    RabbitMqModule
  ],
  controllers: [AppController],
  providers: [AppService, MachineSubscriber],
})
export class AppModule {}
