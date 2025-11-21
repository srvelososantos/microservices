import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Purchase } from "./../../purchase/entities/purchase.entity";


@Entity()
export class BudgetSheet{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    available_budget: number

    @OneToMany(() => Purchase, (purchase) => purchase.budget_sheet, { eager: true })
    purchase: Purchase[]


}