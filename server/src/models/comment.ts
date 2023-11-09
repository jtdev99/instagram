import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const CommentSchema = new Schema(
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
        comment: {
            type: String,
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

type TComment = InferSchemaType<typeof CommentSchema>;

const commentModel = model<TComment>("comment", CommentSchema);

export default commentModel;
