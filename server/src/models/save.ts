import { InferSchemaType, Schema, model } from "mongoose";

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

type TSave = InferSchemaType<typeof SaveSchema>;

const saveModel = model<TSave>("save", SaveSchema);

export default saveModel;
