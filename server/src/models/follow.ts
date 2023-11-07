import mongoose, { Schema, model } from "mongoose";

const FollowSchema = new Schema(
    {
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "account",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "account",
        },
    },
    {
        timestamps: false,
    }
);

const followModel = model("follow", FollowSchema);

export default followModel;
