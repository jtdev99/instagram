import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const FollowSchema = new Schema(
    {
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "account",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "account",
        },
    },
    {
        timestamps: false,
    }
);

type TFollow = InferSchemaType<typeof FollowSchema>;

const followModel = model<TFollow>("follow", FollowSchema);

export default followModel;
