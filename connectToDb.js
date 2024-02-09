import mongoose from "mongoose";

export const connectToDatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("connected to mongodb");
    } catch (error) {
        throw error

    }
}



mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});