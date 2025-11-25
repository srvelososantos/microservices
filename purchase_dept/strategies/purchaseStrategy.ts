import { Purchase } from "src/purchase/entities/purchase.entity";

export interface IPurchaseStrategy {
  readonly purchaseType: string;
  process(purchase: Purchase): Promise<void>;
}