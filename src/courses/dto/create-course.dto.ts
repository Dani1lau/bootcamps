import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsPositive } from "class-validator"
import { minimumSkill } from "../entities/course.entity"

export class CreateCourseDto {

@IsNotEmpty()
readonly title: string

@IsNotEmpty()
readonly description: string

@IsNotEmpty()
@IsNumber()
@IsPositive()
readonly weeks: number

@IsNotEmpty()
@IsNumber()
@IsPositive()
readonly tuition: number

@IsNotEmpty()
@IsEnum(minimumSkill)
readonly minimumSkill: minimumSkill

@IsNotEmpty()
readonly createAt: Date

}
