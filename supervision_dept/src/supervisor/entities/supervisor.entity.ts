import { Request } from "src/request/entities/request.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Supervisor {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column() // coverage area
    area: string
    
    @OneToMany(() => Request, (request) => request.supervisor, { eager: true })
    request: Request[]
}
