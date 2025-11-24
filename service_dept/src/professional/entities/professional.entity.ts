import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Professional {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    first_name: string

    
}
