import colorModel from "../models/colorModel.js"
import productModel from "../models/productModel.js"

const createColor = async (req, res) => {
    try {

        const newColor = new colorModel(req.body)
        const colorSave = await newColor.save();

        res.status(201).json({
            statusCode: 201,
            message: "Cor cadastrada com sucesso",
            data: {
                colorSave
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

        const colors = await colorModel.find()

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                colors
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

        const color = await colorModel.findById(req.params.id).exec();

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                color
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

        const color = await colorModel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        });

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                color
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

        const color = await colorModel.findByIdAndRemove(req.params.id)

        if(color){
            res.status(200).json({
                statusCode: 200,
                message: "Consulta realizada com sucesso!",
                data: {
                    color
                }
            })
        }else{
            res.status(500).json({
                statusCode: 500,
                message: "Erro ao executar a consulta",
                data: { error: "Color not exist"}
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

        const productCategory = await productModel.find({colorBy: req.params.id}).exec();

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


export default { createColor, getAll, getById, updateById, removeById, getByProduct }