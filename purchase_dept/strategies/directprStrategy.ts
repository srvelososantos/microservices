import { Purchase } from "src/purchase/entities/purchase.entity";
import { IPurchaseStrategy } from "./purchaseStrategy";
import { Quote } from "./quote";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class DirectprStrategy implements IPurchaseStrategy{ //valores abaixo de 200
    private quotes: Quote[]

    private logger = new Logger(DirectprStrategy.name);
    readonly purchaseType = 'DIRECT_BUY';
    
    async process(purchase: Purchase): Promise<void> {
        this.logger.log(`[COMPRA DIRETA] Valor R$ ${purchase.estimated_price}. Aprovando imediatamente...`);
    }
}