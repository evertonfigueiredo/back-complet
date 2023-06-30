import productModel from "../models/productModel.js"

const createProduct = async (req, res) => {
    try {

        const newProduct = new productModel(req.body)
        const productSave = await newProduct.save()
            .then(response => response.populate('colorBy').then(data => data.populate('categoryBy')));

        res.status(201).json({
            statusCode: 201,
            message: "Produto cadastrado com sucesso",
            data: {
                productSave
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

        const products = await productModel.find().populate('colorBy').populate('categoryBy').exec()

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                products
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

        const product = await productModel.findById(req.params.id).populate('colorBy').populate('categoryBy').exec();
        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                product
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

        const product = await productModel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        });

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                product
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

        const product = await productModel.findByIdAndRemove(req.params.id)

        if (product) {
            res.status(200).json({
                statusCode: 200,
                message: "Consulta realizada com sucesso!",
                data: {
                    product
                }
            })
        } else {
            res.status(500).json({
                statusCode: 500,
                message: "Erro ao executar a consulta",
                data: { error: "Product not exist" }
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


export default { createProduct, getAll, getById, updateById, removeById }