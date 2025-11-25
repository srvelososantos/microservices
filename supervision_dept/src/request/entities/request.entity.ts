import { Supervisor } from "src/supervisor/entities/supervisor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Request {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column() //number of days
    deadline: number

    @Column()
    description: string

    @Column()
    location: string

    @Column() //FACTORY IMPLEMENTATION 
    machineType: string

    @Column()
    status: 'pending' | 'done'

    @ManyToOne(() => Supervisor, (supervisor) => supervisor.request)
    supervisor: Supervisor[]
}
