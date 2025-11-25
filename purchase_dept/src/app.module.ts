import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetsheetModule } from './budgetsheet/budgetsheet.module';
import { SupplierModule } from './supplier/supplier.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './purchase/entities/purchase.entity';
import { PurchaseService } from 'strategies/purchase.service';
import { PurchaseContext } from 'strategies/purchase.context';
import { DirectprStrategy } from 'strategies/directprStrategy';
import { SmallprStrategy } from 'strategies/smallprStrategy';
import { BiddingStrategy } from 'strategies/biddingprStrategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Purchase]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      database: 'purch_dept',
      username: 'root',
      password: 'rootpassword',
      synchronize: true,
      autoLoadEntities: true
    }),
    BudgetsheetModule,
    PurchaseModule,
    SupplierModule,
    PurchaseModule
  ],
  controllers: [AppController],
  providers: [AppService, PurchaseService, PurchaseContext, DirectprStrategy, SmallprStrategy, BiddingStrategy],
})
export class AppModule {}
