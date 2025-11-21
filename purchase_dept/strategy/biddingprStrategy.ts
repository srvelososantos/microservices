import { PurchaseStrategy } from "./purchaseStrategy";
import { Quote } from "./quote";

export class BiddingStrategy implements PurchaseStrategy{

    private responsable: string
    private quotes: Quote[]
    private negotiationDay: Date
    private finalQuote: Quote

    purchaseType(): string {
        return '1'
    }

    
}