import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
//import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { threadId } from 'worker_threads';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

@Injectable()
export class BootcampsService {

  constructor(@InjectRepository(Bootcamp) private bootcampRepository: Repository<Bootcamp>) { }

  create(createBootcampDto: CreateBootcampDto) {
    //crear la instancia del objeto a guardar
    const nuevoBootcap =  
      this.bootcampRepository.create(createBootcampDto);

      return this.bootcampRepository.save(nuevoBootcap);
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id : id});
  }

    async update(id: number, updateBootcampDto: UpdateBootcampDto) {
    //seleccionar el objeto o el bootcamp 
    //cuyo id sea el del parametro
    const updBootcamp = await this.bootcampRepository.findOneBy({id})

    //fucionar los cambios con el objeto hallado
    await this.bootcampRepository.merge(updBootcamp, updateBootcampDto)

    //grabar cambios en bd

    this.bootcampRepository.save(updBootcamp)

    return updBootcamp
  }

  async remove(id: number) {
    // Buscar el Bootcamp por ID
    const bootcamp = await this.bootcampRepository.findOneBy({ id });

    // Eliminar el Bootcamp
    await this.bootcampRepository.delete(id);

    return { message: `Bootcamp con id ${id} ha sido eliminado` };
  }
  
}
