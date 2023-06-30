import express from "express";
const router = express.Router()

import productControllers from "../controllers/productControllers.js";
import authControllers from "../controllers/authControllers.js";

router.get("/getAll", productControllers.getAll)
router.get("/getById/:id", productControllers.getById)

router.post("/create", authControllers.verifyToken, productControllers.createProduct)
router.put("/updateById/:id", authControllers.verifyToken, productControllers.updateById)
router.delete("/removeById/:id", authControllers.verifyToken, productControllers.removeById)

export default router