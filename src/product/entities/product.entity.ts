import { Image } from "../../image/entities/image.entities.js";

export class Product {
    id?: number;
    name: string;
    price?: number;
    images?: Image[];
}


