import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to Mongo");
    })
    .catch((err) => {
        console.log("Error connecting to Mongo:", err);
    })

app.listen(3000, () => {
    console.log("Server chalu h... jao dhoom machao...")
})