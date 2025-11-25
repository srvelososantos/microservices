// purchase.module.ts
import { Module } from '@nestjs/common';
import { DirectprStrategy } from './directprStrategy';
import { SmallprStrategy } from './smallprStrategy';
import { BiddingStrategy } from './biddingprStrategy';
import { PurchaseContext } from './purchase.context';
import { PurchaseService } from './purchase.service';

@Module({
  providers: [
    PurchaseContext,       // O Contexto
    DirectprStrategy,
    SmallprStrategy,
    BiddingStrategy,
    PurchaseService
  ],
  exports:[PurchaseModule]
})
export class PurchaseModule {}