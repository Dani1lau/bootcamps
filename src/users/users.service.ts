import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  create(createUserDto: CreateUserDto) {
    //crear la instancia del objeto a guardar
    const nuevoUser =
      this.userRepository.create(createUserDto);

    return this.userRepository.save(nuevoUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    //seleccionar el objeto o el usuario
    //cuyo id sea el del parametro
    const updUser = await this.userRepository.findOneBy({ id })

    //fucionar los cambios con el objeto hallado
    await this.userRepository.merge(updUser, updateUserDto)

    //grabar cambios en bd

    this.userRepository.save(updUser)

    return updUser
  }

  async remove(id: number) {
    const course = await this.userRepository.findOneBy({ id });


    await this.userRepository.delete(id);

    return { message: `Usuario con id ${id} ha sido eliminado` };
  }
}
