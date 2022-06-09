import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Column, BeforeInsert, ManyToOne, JoinColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { Candidate } from "../../../candidate/typeorm/entities/candidate";

@Entity('votting_system_voter')
export class Voter {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    birth_city: string;
    
    @Column()
    rg: string;
    
    @Column()
    candidate_id: string;

    @ManyToOne(() => Candidate, candidate => candidate.voters)
    candidate: Candidate;

    @Column()
    date_birthday: Date;

    @Column()
    district: string;
    
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

