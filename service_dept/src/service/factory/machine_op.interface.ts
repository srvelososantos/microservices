export interface MachineOperator {
  runService(data: any): Promise<void>;
}