import mongoose, { Schema, model } from "mongoose";

const SaveItemSchema = new Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "account",
        },
        save: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "save",
        },
    },
    {
        timestamps: false,
    }
);

const saveItemModel = model("saveItem", SaveItemSchema);

export default saveItemModel;
