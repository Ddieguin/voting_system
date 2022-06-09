import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Column, BeforeInsert, Timestamp, OneToMany } from "typeorm";
import { Voter } from "../../../voter/typeorm/entities/voter";

@Entity('votting_system_candidate')
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    rg: string;

    @Column()
    political_party: string;

    @Column()
    number_political_party: string;

    @Column()
    birth_city: string;

    @Column()
    date_birthday: string;

    @OneToMany(() => Voter, voter => voter.candidate)
    voters: Voter[];

    @Column()
    city: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
        
}