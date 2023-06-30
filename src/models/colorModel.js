import mongoose, { Schema } from "mongoose";

const colorModel = new Schema(
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

export default mongoose.model("color", colorModel)