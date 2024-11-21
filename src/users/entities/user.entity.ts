import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable: false
    })
    name: string

    @Column({
        type: "varchar",
        nullable: false
    })
    email: string

    @Column({
        type: "varchar",
        nullable: false
    })
    role: string

    @Column({
        type: "varchar",
        nullable: false
    })
    password: string


    @OneToMany(()=>Bootcamp, (bootcamp : Bootcamp)=> bootcamp.user)
    bootcamp: Bootcamp

    @OneToMany(()=>Review, (review : Review)=> review.user)
    review: Review

}
