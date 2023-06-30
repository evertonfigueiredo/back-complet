import express from "express";
const router = express.Router()

import userControllers from "../controllers/userControllers.js";
import authControllers from "../controllers/authControllers.js";

router.post("/create", userControllers.createUser)
router.post("/login", authControllers.login)

router.get("/getAll", authControllers.verifyToken, userControllers.getAll)
router.get("/getById/:id", authControllers.verifyToken, userControllers.getById)
router.put("/updateById/:id", authControllers.verifyToken, userControllers.updateById)
router.delete("/removeById/:id", authControllers.verifyToken, userControllers.removeById)

export default router