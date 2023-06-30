import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import * as dotenv from "dotenv"

dotenv.config()

const SECRET = process.env.SECRET

const login = async (req, res) => {
    try {

        const user = await userModel.findOne({email: req.body.email}).exec()

        if (user.length == 0) {
            res.status(401).json({
                statusCode: 401,
                message: "Usuário não encontrado!",
                data: {
                    email: req.body.email
                }
            })
        }
        const result = bcrypt.compareSync(req.body.password, user.password)

        if (!result) {
            res.status(401).json({
                statusCode: 401,
                message: "Usuário não autorizado!",
                data: {}
            })
        }

        user.password = undefined

        const token  = jwt.sign({user}, SECRET,{
            expiresIn: 60 * 60
        })

        res.status(200).json({
            statusCode: 200,
            message: "Login Realizado com sucesso",
            data: {
                token
            }
        })
        
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar a consulta",
            data: {
                error: error.message
            }
        })
    }
}

const verifyToken = (req, res, next) => {

    try {

        const tokenHeader = req.headers["authorization"];
        const token = tokenHeader && tokenHeader.split(" ")[1]
        
        if (!token) {
            res.status(401).json({
                statusCode: 401,
                message: "Não autorizado",
                data: {}
            })
        }

        jwt.verify(token, SECRET);
        next();
        
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar a consulta",
            data: {
                error: error.message
            }
        })
    }


}

export default {login,verifyToken}