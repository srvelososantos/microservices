// Define o "contrato"
export interface MachineOperator {
  runService(): Promise<void>;
}

export type MachineType = 'FRONT_END_LOADER' | 'BACKHOE' | 'LAWN_MOWER' | 'DELIVER_TRUCK';

// --- Implementações (POJOs - Plain Old Java Objects) ---

export class FrontEndLoader implements MachineOperator {
  constructor(private data: { hours_amount: number; hour_price: number }) {}

  async runService(): Promise<void> {
    const total = this.data.hours_amount * this.data.hour_price;
    console.log(`[PÁ CARREGADEIRA] Verificando óleo, pneu... Total: R$ ${total}`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 3) throw new Error('BREAKDOWN');
  }
}

export class Backhoe implements MachineOperator {
  constructor(private data: { hours_amount: number; hour_price: number }) {}

  async runService(): Promise<void> {
    const total = this.data.hours_amount * this.data.hour_price;
    console.log(`[RETROESCAVADEIRA] Verificando gancho, hidráulica... Total: R$ ${total}`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 8) throw new Error('BREAKDOWN');
  }
}

export class LawnMower implements MachineOperator {
  constructor(private data: { field_size: number }) {}

  async runService(): Promise<void> {
    const total = this.data.field_size * 3.32;
    console.log(`[CORTADOR] Verificando lâminas... Total: R$ ${total}`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 6) throw new Error('BREAKDOWN');
  }
}

export class DeliverTruck implements MachineOperator {
  constructor(private data: { material_amount: number }) {}

  async runService(): Promise<void> {
    const total = this.data.material_amount * 23;
    console.log(`[CAMINHÃO] Verificando caçamba... Total: R$ ${total}`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 9) throw new Error('BREAKDOWN');
  }
}