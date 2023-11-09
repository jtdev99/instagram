import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const SaveItemSchema = new Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "post",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "account",
        },
        save: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "save",
        },
    },
    {
        timestamps: false,
    }
);

type TSaveItem = InferSchemaType<typeof SaveItemSchema>;

const saveItemModel = model<TSaveItem>("saveItem", SaveItemSchema);

export default saveItemModel;
