// strategies/purchase.context.ts
import { Injectable } from '@nestjs/common';
import { DirectprStrategy } from './directprStrategy';
import { SmallprStrategy } from './smallprStrategy';
import { BiddingStrategy } from './biddingprStrategy';
import { IPurchaseStrategy } from './purchaseStrategy';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@Injectable()
export class PurchaseContext {
  constructor(
    private readonly direct: DirectprStrategy,
    private readonly threeQuotes: SmallprStrategy,
    private readonly bidding: BiddingStrategy,
  ) {}

  // Este método encapsula a complexidade da escolha (os IFs ficam só aqui)
  public getStrategy(price: number): IPurchaseStrategy {
    if (price <= 200) {
      return this.direct;
    } else if (price <= 5000) {
      return this.threeQuotes;
    } else {
      return this.bidding;
    }
  }

  // Método opcional para já executar direto
  public async executeStrategy(purchase: Purchase): Promise<void> {
    const strategy = this.getStrategy(purchase.estimated_price);
    await strategy.process(purchase);
  }
}