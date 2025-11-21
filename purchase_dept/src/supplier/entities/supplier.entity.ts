import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Purchase } from "./../../purchase/entities/purchase.entity";

@Entity()
export class Supplier{
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(() => Purchase, (purchase) => purchase.supplier, { eager: true } )
    purchase: Purchase[]
}