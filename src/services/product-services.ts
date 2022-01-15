import { Like } from "typeorm";
import { ProductEntity } from "../entity/product-entity";

export class ProductServices {
    public async insert(data: ProductEntity) {
        const product = ProductEntity.create(data)
        await product.save()
        return product
    }
    public async find(id: number) {
        const product = await ProductEntity.findOne(id)
        return product
    }
}