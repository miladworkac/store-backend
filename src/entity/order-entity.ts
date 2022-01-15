import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer-entity";
import { ProductEntity } from "./product-entity";

@Entity()
export class OrderEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => CustomerEntity,
        (customers) => customers.orders)
    customers: CustomerEntity

    @ManyToMany(() => ProductEntity)
    @JoinTable({
        name: "ProductOrder",
        joinColumn: {
            name: "productId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "orderId",
            referencedColumnName: "id",
        },
    })
    products: ProductEntity[];
}