import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bootcamp {

@PrimaryGeneratedColumn()
id:number

@Column({
    type:"integer",
    nullable: true
})
phone:number

@Column ({
    type: "varchar",
    nullable: false
})
name: string

@Column({name : 'average_number'})
averageRating: number

@Column({
    type: "varchar",
    nullable: false
})
address: string

@Column({
    type:"varchar",
})
topics: string

@Column({
    type: "timestamp",
    default: () => 'CURRENT_TIMESTAMP',
    name: "created_at"
})
createAt: Date

//Los cursos de un bootcamp
@OneToMany(()=> Course, (curso : Course)=> curso.bootcamp)
cursos: Course[]

@OneToMany(()=> Review, (review : Review)=> review.bootcamp)
review: Review[]

@ManyToOne(()=> User, (user : User)=> user.bootcamp)
user: User[]

}