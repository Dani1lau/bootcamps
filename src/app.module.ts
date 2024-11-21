import { Module } from '@nestjs/common';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bootcamps_Ptech',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true
    }),
    BootcampsModule,
    CoursesModule,
    ReviewsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
