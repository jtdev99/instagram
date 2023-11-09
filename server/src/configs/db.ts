import mongoose from "mongoose";

export const connectDb = async (MONGOURI: string): Promise<boolean> => {
    try {
        await mongoose.connect(MONGOURI);
        console.log("Connected to database");
        return true;
    } catch (error) {
        console.log(error);

        return false;
    }
};
