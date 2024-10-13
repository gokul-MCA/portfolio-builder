import mongoose from "mongoose";

export const connectMongoDb = async() => {
 try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MONGODB")
 }catch (error){
    console.log("Error connecting to database: ", error);
 }
}
