import express from "express";
const app = express();

import cors from "cors"
app.use(cors())

import * as dotenv from "dotenv"
dotenv.config()

app.use(express.json())

import db from "./database/mongoConfig.js"
db.connect()

import userRouter from "./routes/userRoutes.js";
app.use("/user", userRouter)

import categoryRouter from "./routes/categoryRoutes.js";
app.use("/category", categoryRouter)

import colorRoutes from "./routes/colorRoutes.js";
app.use("/color", colorRoutes)

import productRoutes from "./routes/productRoutes.js";
app.use("/product", productRoutes)


export default app