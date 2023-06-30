import bcrypt from "bcrypt";
import categoryModel from "../models/categoryModel.js"
import productModel from "../models/productModel.js"

const createCategory = async (req, res) => {
    try {

        const newCategory = new categoryModel(req.body)
        const categorySave = await newCategory.save();

        res.status(201).json({
            statusCode: 201,
            message: "Categoria cadastrada com sucesso",
            data: {
                categorySave
            }
        })


    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar o cadastro",
            data: {
                error: error.message
            }
        })
    }
}

const getAll = async (req, res) => {
    try {

        const categorys = await categoryModel.find()

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                categorys
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

const getById = async (req, res) => {
    try {

        const category = await categoryModel.findById(req.params.id).exec();

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                category
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

const updateById = async (req, res) => {
    try {

        const category = await categoryModel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        });

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                category
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

const removeById = async (req, res) => {
    try {

        const category = await categoryModel.findByIdAndRemove(req.params.id)

        if(category){
            res.status(200).json({
                statusCode: 200,
                message: "Consulta realizada com sucesso!",
                data: {
                    category
                }
            })
        }else{
            res.status(500).json({
                statusCode: 500,
                message: "Erro ao executar a consulta",
                data: { error: "User not exist"}
            })
        }
        

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

const getByProduct = async (req, res) => {
    try {

        const productCategory = await productModel.find({categoryBy: req.params.id}).exec();

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                productCategory
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


export default { createCategory, getAll, getById, updateById, removeById, getByProduct }