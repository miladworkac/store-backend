import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order-entity";
import { SellerEntity } from "./seller-entity";
import { CustomerEntity } from "./customer-entity"

@Entity()
export class ProductEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @ManyToOne(() => SellerEntity,
        (sellers) => sellers.products)
    sellers: SellerEntity;

    // @ManyToMany(() => OrderEntity)
    // @JoinTable()


    // @ManyToMany(() => CustomerEntity)
    // @JoinTable()

    @ManyToMany(() => OrderEntity)
    @JoinTable({
        name: "ProductOrder",
        joinColumn: {
            name: "orderId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "productId",
            referencedColumnName: "id",
        },
    })
    orders: OrderEntity[];

    @ManyToMany(() => CustomerEntity)
    @JoinTable({
        name: "CustomerProduct",
        joinColumn: {
            name: "customerId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "productId",
            referencedColumnName: "id",
        },
    })
    customers: CustomerEntity[];
}