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
import { JobModule } from './service/factory/job.module';
import { MachineFactory } from './service/factory/machine.factory';
import { Service } from './service/entities/service.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Service]),
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
    RabbitMqModule,
    JobModule
  ],
  controllers: [AppController],
  providers: [AppService, MachineSubscriber, MachineFactory, ]
})
export class AppModule {}
