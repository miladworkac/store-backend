import express from "express";
import { SellerEntity } from "../entity/seller-entity";
import { ProductServices } from "../services/product-services";
import { SellerServices } from "../services/seller-services";
const router = express.Router()
const sellerservices = new SellerServices();
const productservices = new ProductServices();
router.post("/", async (req, res) => {
    const { name } = req.body
    let seller = new SellerEntity
    seller.name = name,
        seller = await sellerservices.insert(seller)
    return res.json(seller)
})
router.put("/:sellerId/new-product/:productId", async (req, res) => {
    const { sellerId, productId } = req.params;

    const seller = await sellerservices.find(parseInt(sellerId));

    console.log(`seller before addind new product`, seller);
    if (!seller) {
        res.status(404).send("seller nor found");
    }

    const product = await productservices.find(parseInt(productId));

    if (!product) {
        res.status(404).send("product nor found");
    }

    const updatedseller = await sellerservices.addProduct(seller, product);

    return res.json(updatedseller);
});
export {
    router as SellerController
}