import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Bootcamp} from './entities/bootcamp.entity';
import { Course } from 'src/courses/entities/course.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';


@Module({
  imports: [ TypeOrmModule.forFeature([Bootcamp, Course, Review, User])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
