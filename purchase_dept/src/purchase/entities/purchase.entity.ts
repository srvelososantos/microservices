import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./../../supplier/entities/supplier.entity";
import { BudgetSheet } from "./../../budgetsheet/entities/budgetsheet.entity";

@Entity()
export class Purchase{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;

    @CreateDateColumn()
    generatedAt: Date;

    @Column()
    status: 'pending' | 'ready' | 'done'

    @Column()
    estimated_price: number;

    @ManyToOne(() => Supplier, (supplier) => supplier.purchase)
    supplier: Supplier;

    @ManyToOne(() => BudgetSheet, (budget_sheet) => budget_sheet.purchase)
    budget_sheet: BudgetSheet;

}