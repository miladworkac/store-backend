import express from "express";
import { CustomerEntity } from "../entity/customer-entity";
import { CustomerService } from "../services/customer-services";
const router = express.Router()
const customerservice = new CustomerService();
router.post("./", async (req, res) => {
    const { name } = req.body;
    // const { age } = req.body.age;
    const customer = new CustomerEntity();
    customer.name = name
    // customer.age = age
    await customerservice.insert(customer)
    return res.json(customer)
})

export {
    router as CustomerController
}