import mongoose, { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        caption: "",
        medias: {
            type: Array<unknown>,
            default: [],
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "account",
        },
    },
    {
        timestamps: true,
    }
);

const postModel = model("post", PostSchema);

export default postModel;
