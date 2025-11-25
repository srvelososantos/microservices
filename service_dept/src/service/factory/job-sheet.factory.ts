import { Injectable } from '@nestjs/common';


export interface MachineOperator {
  runService(data: any): Promise<void>;
}
//pa carregadeira
export class FrontEnd_loader implements MachineOperator{

  public hours_amount: number;
  public hour_price: number;

  public bucket_type: string;
  public total_price: number;

  async runService(data: any): Promise<void> {
    this.total_price = (this.hours_amount * this.hour_price);
    console.log('verify oil...\nverify liquid cooler...\nverify tire pressure...\nverify fuel...')

    if(Math.floor(Math.random() * 10) > 5){
      throw new Error('BREAKDOWN');
    }
    
  }

}
//retroescavadeira
export class Backhoe implements MachineOperator{

  public hours_amount: number;
  public hour_price: number;

  public hook_type: string;
  public total_price: number;

  async runService(data: any): Promise<void> {
    this.total_price = (this.hours_amount * this.hour_price);
    console.log('verify oil...\nverify liquid cooler...\nverify tire pressure...\nverify hook liquid pressure...\nverify fuel...')

    if(Math.floor(Math.random() * 10) > 5){
      throw new Error('BREAKDOWN');
    }
  }

}
//cortador de grama
export class LawnMower implements MachineOperator {

  public field_size: number;
  public blade_type: string;

  public total_price: number;

  async runService(data: any): Promise<void> {
    this.total_price = this.field_size * 3.32;

    console.log('verify oil...');
    console.log('verify fuel...');
    console.log('verify tire pressure...');
    console.log('verify blades...');

    if (Math.floor(Math.random() * 10) > 5) {
      throw new Error('BREAKDOWN');
    }
  }

}
//caminhao de terra/areia/pedra
export class Deliver_truck implements MachineOperator{
  
  public material_amount: number;
  public material_type: string;
  public total_price: number;

  async runService(data: any): Promise<void> {
    this.total_price = (this.material_amount * 23);
    console.log('verify oil...\nverify fuel...\nverify tire pressure...\n')

    if(Math.floor(Math.random() * 10) > 5){
      throw new Error('BREAKDOWN');
    }
  }

}