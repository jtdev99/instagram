import { Schema, model } from "mongoose";

const ProfileSchema = new Schema(
    {
        fullname: {
            type: String,
            default: "",
        },
        dob: {
            type: Date,
            default: "",
        },
        photoUrl: {
            type: String,
            default: "",
        },
        gender: {
            type: Number,
            enum: [0, 1, 2, 3],
        },
        bio: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const profileModel = model("profile", ProfileSchema);

export default profileModel;
