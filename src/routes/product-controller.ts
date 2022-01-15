import express from "express";
import { ProductEntity } from "../entity/product-entity";
import { ProductServices } from "../services/product-services";
const router = express.Router()
const productservices = new ProductServices
router.post("/", async (req, res) => {
    const { name, price } = req.body
    let product = new ProductEntity
    product.name = name,
        product.price = price,
        product = await productservices.insert(product)
    return res.json(product)


})
export {
    router as ProductController
}