import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

  constructor(@InjectRepository(Course) private courseRepository: Repository<Course>) { }

  create(createCourseDto: CreateCourseDto) {
      //crear la instancia del objeto a guardar
      const nuevaCourse =  
      this.courseRepository.create(createCourseDto);
  
      return this.courseRepository.save(nuevaCourse);
  }

  findAll() {
    return this.courseRepository.find();  
  }

  findOne(id: number) {
    return this.courseRepository.findOneBy({id : id});
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    //seleccionar el objeto o el course
    //cuyo id sea el del parametro
    const updCourse = await this.courseRepository.findOneBy({id})

    //fucionar los cambios con el objeto hallado
    await this.courseRepository.merge(updCourse, updateCourseDto)

    //grabar cambios en bd

    this.courseRepository.save(updCourse)

    return updCourse
  }

  async remove(id: number) {
    
    const course = await this.courseRepository.findOneBy({ id });


    await this.courseRepository.delete(id);

    return { message: `Course con id ${id} ha sido eliminado` };
  }

}
