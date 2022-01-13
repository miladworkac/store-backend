import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order-entity";

@Entity()
export class CustomerEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number


    @OneToMany(() => OrderEntity,
        (order) => order.id)
    order: OrderEntity[];

}