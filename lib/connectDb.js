import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/";

export const connectDb = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("DB is already connected")
            return;
        }
        await mongoose.connect(DB_URI, {
            dbName: "RestCountriesApi",
        });
        console.log("Database Connected")

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
