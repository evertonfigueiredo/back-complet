import mongoose, { Schema } from "mongoose";

const categoryModel = new Schema(
    {
        id: Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
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

export default mongoose.model("category", categoryModel)