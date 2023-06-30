import mongoose, { Schema } from "mongoose";

const productModel = new Schema(
    {
        id: Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        },
        qtd: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        colorBy: {
            type: Schema.Types.ObjectId,
            ref: 'color'
        },
        categoryBy: {
            type: Schema.Types.ObjectId,
            ref: 'category'
        },
        createdAt:{
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("product", productModel)