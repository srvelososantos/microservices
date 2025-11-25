import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./../../supplier/entities/supplier.entity";
import { BudgetSheet } from "./../../budgetsheet/entities/budgetsheet.entity";

@Entity()
export class Purchase{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    type: string;

    @CreateDateColumn()
    generatedAt: Date;

    @Column()
    status: 'pending' | 'done'

    @Column()
    estimated_price: number;

    @Column()
    description: string;

    @ManyToOne(() => Supplier, (supplier) => supplier.purchase)
    supplier: Supplier;

    @ManyToOne(() => BudgetSheet, (budget_sheet) => budget_sheet.purchase)
    budget_sheet: BudgetSheet;

}