import { Like } from "typeorm";
import { ProductEntity } from "../entity/product-entity";
import { SellerEntity } from "../entity/seller-entity";

export class SellerServices {
    public async insert(data: SellerEntity) {
        const seller = SellerEntity.create(data)
        await seller.save()
        return seller
    }

    public async find(id: number) {
        const seller = await SellerEntity.findOne(id, {
            relations: ["products"],
        })
        return seller
    }
    public async addProduct(seller: SellerEntity, product: ProductEntity) {
        if (seller.products != undefined) {
            seller.products.push(product);
        } else {
            seller.products = [product];
        }
        await seller.save();
        return seller;
    }


}