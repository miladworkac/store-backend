import { Like } from "typeorm";
import { CustomerEntity } from "../entity/customer-entity";
export class CustomerService {
    public async insert(data: CustomerEntity) {
        const customer = CustomerEntity.create(data);
        await customer.save();

        return customer;
    }
}