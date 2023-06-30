import express from "express";
const router = express.Router()

import categoryControllers from "../controllers/categoryControllers.js";
import authControllers from "../controllers/authControllers.js";

router.get("/getAll", categoryControllers.getAll)
router.get("/getById/:id", categoryControllers.getById)
router.get("/getByProduct/:id", categoryControllers.getByProduct)

router.post("/create", authControllers.verifyToken, categoryControllers.createCategory)
router.put("/updateById/:id", authControllers.verifyToken, categoryControllers.updateById)
router.delete("/removeById/:id", authControllers.verifyToken, categoryControllers.removeById)

export default router