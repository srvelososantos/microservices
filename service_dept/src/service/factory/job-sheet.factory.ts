import { Injectable } from '@nestjs/common';

// Interface do produto (Ficha)
export interface JobSheet {
  description: string;
  priority: string;
  generateInstructions(): string;
}

// Produto Concreto A: Ficha para Compra de Equipamento
class EquipmentJobSheet implements JobSheet {
  constructor(private data: any) {}
  description = 'Instalação de Equipamento Novo';
  priority = 'Alta';
  generateInstructions() {
    return `Receber equipamento ${this.data.item} e agendar técnico.`;
  }
}

// Produto Concreto B: Ficha para Serviço Geral
class GeneralServiceJobSheet implements JobSheet {
  constructor(private data: any) {}
  description = 'Execução de Serviço Geral';
  priority = 'Normal';
  generateInstructions() {
    return `Executar serviço conforme solicitado: ${this.data.description}`;
  }
}

//FACTORY
@Injectable()
export class JobSheetFactory {
  createJobSheet(purchaseData: any): JobSheet {
    // Lógica de decisão (Baseada no input do Purchase Dept)
    if (purchaseData.category === 'equipment') {
      return new EquipmentJobSheet(purchaseData);
    } else {
      return new GeneralServiceJobSheet(purchaseData);
    }
  }
}