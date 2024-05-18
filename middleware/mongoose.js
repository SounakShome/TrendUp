import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection establish");
    } catch (error) {
        console.log("connection failed");
        throw new Error("connection failed", error);
    }
};

export default connectDB;
