import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order-entity";
import { ProductEntity } from "./product-entity";

@Entity()
export class CustomerEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        nullable: true
    })
    age: number


    @OneToMany(() => OrderEntity,
        (orders) => orders.id)
    orders: OrderEntity[];

    @ManyToMany(() => ProductEntity)
    @JoinTable({
        name: "CustomerProduct",
        joinColumn: {
            name: "productId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "customerId",
            referencedColumnName: "id",
        },
    })
    products: ProductEntity[];
}