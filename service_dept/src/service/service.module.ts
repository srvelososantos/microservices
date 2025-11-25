import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { Service } from './entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMqModule } from 'src/rabbitmq.module';

@Module({
  imports:[TypeOrmModule.forFeature([Service]), RabbitMqModule],
  controllers: [ServiceController],
  providers: [ServiceService], // Factory registrada aqui
})
export class ServiceModule {}