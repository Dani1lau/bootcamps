import { IsNotEmpty, IsString, IsEmail, IsIn, MinLength } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()  
  readonly role: string;

  @IsNotEmpty() // Asegura que no esté vacío
  @IsString()   // Valida que sea una cadena de texto
  @MinLength(8) // Asegura que la contraseña tenga al menos 8 caracteres
  readonly password: string;
}

