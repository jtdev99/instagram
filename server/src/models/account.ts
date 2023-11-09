import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const AccountSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            min: 3,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        photoUrl: {
            type: String,
            default: "",
        },
        profile: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "profile",
        },
        isPrivate: {
            type: Boolean,
            default: false,
        },
        facebook: {
            url: {
                type: String,
                default: "",
            },
            isConnected: {
                type: Boolean,
                default: false,
            },
        },
        role: {
            type: String,
            enum: ["admin", "manager", "user"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

type TAccount = InferSchemaType<typeof AccountSchema>;

const accountModel = model<TAccount>("account", AccountSchema);

export default accountModel;
