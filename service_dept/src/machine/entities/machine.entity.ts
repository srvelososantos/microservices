import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machine {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    status: string
}
