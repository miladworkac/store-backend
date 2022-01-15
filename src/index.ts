import { createConnection } from "typeorm";
import express from "express";
import { CustomerEntity } from "./entity/customer-entity";
import { ProductEntity } from "./entity/product-entity";
import { SellerEntity } from "./entity/seller-entity";
import { OrderEntity } from "./entity/order-entity";
import { CustomerController } from "./routes/customer-controller";
import { ProductController } from "./routes/product-controller";
import { SellerController } from "./routes/seller-controller";
const app = express();
async function main() {
    try {
        await createConnection({
            type: "mssql",
            host: "localhost",
            port: 1434,
            username: "user1",
            password: "123",
            extra: {
                trustServerCertificate: true,
            },
            database: "typeorm",
            synchronize: true,
            entities: [CustomerEntity, ProductEntity, SellerEntity, OrderEntity],
            logging: true,
        });
        console.log("database connected");
        app.use(express.json());
        app.use("/api/customer", CustomerController);
        app.use("/api/product", ProductController);
        app.use("/api/seller", SellerController);

        app.listen(5000, () => console.log("Listening on port 5000"));
    } catch (e: any) {
        console.error(e);
        console.log("connection error");
    }
}
main();



