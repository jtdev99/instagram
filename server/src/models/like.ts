import mongoose, { Schema, model } from "mongoose";

const LikeSchema = new Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "account",
        },
        isLiked: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const likeModel = model("like", LikeSchema);

export default likeModel;
