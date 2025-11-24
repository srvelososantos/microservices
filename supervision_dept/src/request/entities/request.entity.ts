import { Supervisor } from "src/supervisor/entities/supervisor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Request {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column() //number of days
    deadline: number

    @Column()
    street: string

    @Column()
    number: number

    @Column()
    zip_code: number

    @Column() //supervisor or another people
    source: 'supervisor' | 'other'

    @Column()
    status: 'pending' | 'done'

    @ManyToOne(() => Supervisor, (supervisor) => supervisor.request)
    supervisor: Supervisor[]
}
