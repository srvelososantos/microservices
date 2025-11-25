import { Injectable, Logger } from '@nestjs/common';
import { IPurchaseStrategy} from './purchaseStrategy';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@Injectable()
export class SmallprStrategy implements IPurchaseStrategy{  //valores de 200 a 5000 reais

    private responsable: string
    private invoice: string

    private logger = new Logger(SmallprStrategy.name);
    readonly purchaseType = 'SMALL_BUY';

    async process(purchase: Purchase): Promise<void> {
        this.logger.log(`[3 ORÇAMENTOS] Valor R$ ${purchase.estimated_price}. Iniciando cotação com fornecedores...`);
        // Lógica: Enviar e-mail para 3 fornecedores, mudar status para 'QUOTING'
    }
}