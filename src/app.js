import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

// khởi tạo
const app = express();

app.use(express.json());
app.use(cors())

app.use("/api", productRouter);

app.use("/api", categoryRouter);

app.use("/api", authRouter);

mongoose.connect(process.env.URI);

export const viteNodeApp = app;
