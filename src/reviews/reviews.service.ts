import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewsService {

  constructor(@InjectRepository(Review) private reviewRepository: Repository<Review>) { }

  create(createReviewDto: CreateReviewDto) {
    //crear la instancia del objeto a guardar
    const nuevaReview =  
      this.reviewRepository.create(createReviewDto);

      return this.reviewRepository.save(nuevaReview);
  }

  findAll() {
    return this.reviewRepository.find();  
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({id : id});
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    //seleccionar el objeto o el review
    //cuyo id sea el del parametro
    const updReview = await this.reviewRepository.findOneBy({id})

    //fucionar los cambios con el objeto hallado
    await this.reviewRepository.merge(updReview, updateReviewDto)

    //grabar cambios en bd

    this.reviewRepository.save(updReview)

    return updReview
  }

  async remove(id: number) {

    const review = await this.reviewRepository.findOneBy({ id });


    await this.reviewRepository.delete(id);

    return { message: `Review con id ${id} ha sido eliminado` };
  }
}
