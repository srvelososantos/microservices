import { PurchaseStrategy } from './purchaseStrategy';

export class SmallprStrategy implements PurchaseStrategy{

    private responsable: string
    private invoice: string

    purchaseType() {
        return '1'
    }
}