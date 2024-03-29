import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    }>;
    update(id: number, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
