import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        caption: "",
        medias: {
            type: Array<unknown>,
            default: [],
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "account",
        },
    },
    {
        timestamps: true,
    }
);

type TPost = InferSchemaType<typeof PostSchema>;

const postModel = model<TPost>("post", PostSchema);

export default postModel;
