import { IsNotEmpty, IsString, IsNumber, IsPositive, Max, Min } from 'class-validator';

export class CreateReviewDto {

  @IsNotEmpty() 
  @IsString()  
  readonly title: string;

  @IsNotEmpty() 
  @IsString()   
  readonly comment: string;

  @IsNotEmpty() 
  @IsNumber()  
  @Min(1)       
  @Max(5)     
  readonly reating: number;
}
