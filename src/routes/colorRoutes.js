import express from "express";
const router = express.Router()

import colorControllers from "../controllers/colorControllers.js";
import authControllers from "../controllers/authControllers.js";

router.get("/getAll", colorControllers.getAll)
router.get("/getById/:id", colorControllers.getById)
router.get("/getByProduct/:id", colorControllers.getByProduct)

router.post("/create", authControllers.verifyToken, colorControllers.createColor)
router.put("/updateById/:id", authControllers.verifyToken, colorControllers.updateById)
router.delete("/removeById/:id", authControllers.verifyToken, colorControllers.removeById)

export default router