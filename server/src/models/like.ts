import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const LikeSchema = new Schema(
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
        isLiked: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

type TLike = InferSchemaType<typeof LikeSchema>;

const likeModel = model<TLike>("like", LikeSchema);

export default likeModel;
