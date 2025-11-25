
export interface MachineOperator {
  runService(): Promise<void>;
}

export type MachineType = 'FRONT_END_LOADER' | 'BACKHOE' | 'LAWN_MOWER' | 'DELIVER_TRUCK';

export class FrontEndLoader implements MachineOperator {
  constructor(private data: { hours_amount: number; hour_price: number }) {}

  async runService(): Promise<void> {
    const total = this.data.hours_amount * this.data.hour_price;
    console.log(`[FRONT_END_LOADER] verifying oil, fuel, tire...`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 3) throw new Error('BREAKDOWN'); // 70% break chance
  }
}

export class Backhoe implements MachineOperator {
  constructor(private data: { hours_amount: number; hour_price: number }) {}

  async runService(): Promise<void> {
    const total = this.data.hours_amount * this.data.hour_price;
    console.log(`[BACKHOE] Verifying hook, hidraulics...`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 8) throw new Error('BREAKDOWN'); // 20% break chance
  }
}

export class LawnMower implements MachineOperator {
  constructor(private data: { field_size: number }) {}

  async runService(): Promise<void> {
    const total = this.data.field_size * 3.32;
    console.log(`[LAWN_MOWER] Verifying blades...`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 6) throw new Error('BREAKDOWN'); // 40% break chance
  }
}

export class DeliverTruck implements MachineOperator {
  constructor(private data: { material_amount: number }) {}

  async runService(): Promise<void> {
    const total = this.data.material_amount * 23;
    console.log(`[DELIVER_TRUCK] Verificando truck body...`);
    this.checkBreakdown();
  }

  private checkBreakdown() {
    if (Math.floor(Math.random() * 10) > 9) throw new Error('BREAKDOWN'); // 10% break chance
  }
}