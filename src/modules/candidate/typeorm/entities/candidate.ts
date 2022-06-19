import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Column, OneToMany, BeforeInsert, JoinColumn } from "typeorm";
import bcrypt from 'bcrypt';
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
    date_birthday: Date;

    @Column()
    city: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    hashRg() {
        const salt = bcrypt.genSaltSync(10);
        this.rg = bcrypt.hashSync(this.rg, salt);
    }
        
}