import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/reviews/entities/review.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([User, Review, Bootcamp])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
