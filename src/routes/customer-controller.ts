import express from "express";
import { CustomerEntity } from "../entity/customer-entity";
import { CustomerService } from "../services/customer-services";
const router = express.Router()
const customerservice = new CustomerService();
router.post("/", async (req, res) => {
    const { name, age } = req.body; let customer = new CustomerEntity();
    customer.name = name
    customer.age = age

    customer = await customerservice.insert(customer)
    return res.json(customer)
})

export {
    router as CustomerController
}