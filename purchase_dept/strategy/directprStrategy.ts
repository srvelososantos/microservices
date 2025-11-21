import { PurchaseStrategy } from "./purchaseStrategy";
import { Quote } from "./quote";

export class DirectprStrategy implements PurchaseStrategy{

    private quotes: Quote[]

    purchaseType(): string {
        return `1`
    }
}