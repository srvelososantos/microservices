// purchase.service.ts
import { Injectable } from '@nestjs/common';
import { PurchaseContext } from './purchase.context';
import { Purchase } from 'src/purchase/entities/purchase.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PurchaseService {
  constructor(
    private readonly purchaseContext: PurchaseContext, // Injeta o Contexto

    @InjectRepository(Purchase)
    private readonly purchaseRepository: Repository<Purchase>,

  ) {}

  async handleNewPurchaseRequest(estimated_price: number, description: string) {

    const strategy = this.purchaseContext.getStrategy(estimated_price)

    const tipoDeCompra = strategy.purchaseType;

    const purchase = this.purchaseRepository.create({
        description,
        estimated_price,
        status: 'pending',
        type: tipoDeCompra 
    });

    strategy.process(purchase)

    await this.purchaseRepository.save(purchase);
    return purchase;
  }
}