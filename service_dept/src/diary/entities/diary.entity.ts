import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Diary {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    description: string
}
