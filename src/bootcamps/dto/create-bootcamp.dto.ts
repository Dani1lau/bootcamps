import { IsDate, IsNotEmpty, IsNumber, IsPositive, Max, Min } from "class-validator"

export class CreateBootcampDto {

    @IsPositive({ message: "Telefono debe ser positivo" })
    @IsNumber()
    @IsNotEmpty( {message: "Telefono Obligstorio"} )
    readonly phone : number
    
    @IsNotEmpty( {message: "Nombre Obligstorio"} )
    readonly name : string

    @Min(1)
    @Max(10)
    readonly averageRating : number

    @IsNotEmpty()
    readonly address : string
    readonly topics : string
    
    @IsDate()
    readonly createAt : Date
}