import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable: false
    })
    title: string

    @Column({
        type: "text",
        nullable: false
    })
    comment: string

    @Column({
        type: "tinyint",
        nullable: false,
        default: 4
    })
    reating: number

    @ManyToOne(()=>Bootcamp, (bootcamp : Bootcamp)=> bootcamp.review)
    bootcamp: Bootcamp

    @ManyToOne(()=> User, (user : User)=> user.review)
    user: User[]
}
