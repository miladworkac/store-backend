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
        (seller) => seller.product)
    seller: SellerEntity;

    @ManyToMany(() => OrderEntity)
    @JoinTable()
    orderentity: OrderEntity[];

    @ManyToMany(() => CustomerEntity)
    @JoinTable()
    customerentity: CustomerEntity[];

}