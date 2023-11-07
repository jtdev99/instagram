import mongoose, { Schema, model } from "mongoose";

const CommentSchema = new Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
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

const commentModel = model("comment", CommentSchema);

export default commentModel;
