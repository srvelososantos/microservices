import { Logger } from "@nestjs/common";
import { IPurchaseStrategy } from "./purchaseStrategy";
import { Quote } from "./quote";
import { Purchase } from "src/purchase/entities/purchase.entity";

export class BiddingStrategy implements IPurchaseStrategy{ // acima de 10000

    private logger = new Logger(BiddingStrategy.name);
    readonly purchaseType = 'BIDDING_BUY';

    async process(purchase: Purchase): Promise<void> {
        this.logger.log(`[LICITAÇÃO] Valor R$ ${purchase.estimated_price}. Abrindo edital público...`);
        // Lógica: Publicar no diário oficial, mudar status para 'BIDDING_OPEN'
    }
}