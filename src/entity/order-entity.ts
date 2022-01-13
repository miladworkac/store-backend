import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer-entity";
import { ProductEntity } from "./product-entity";

@Entity()
export class OrderEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => CustomerEntity,
        (customer) => customer.order)
    customer: CustomerEntity
    // @ManyToMany(()=>ProductEntity)

}