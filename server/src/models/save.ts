import { Schema, model } from "mongoose";

const SaveSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const saveModel = model("save", SaveSchema);

export default saveModel;
