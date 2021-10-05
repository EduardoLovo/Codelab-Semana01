import { IsString } from "class-validator"
import { Image } from "../entities/image.entities"

export class CreateImageDto extends Image {
    @IsString()
    url: string;
}