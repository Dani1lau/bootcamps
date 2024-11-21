import { minimumSkill } from '../entities/course.entity';

export class UpdateCourseDto{

    readonly title? : string
    readonly description? : string
    readonly weeks? : number
    readonly tuition? : number
    readonly minimumSkill? : minimumSkill
    readonly createAt? : Date

}
