import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { PrismaClient } from "@prisma/client";

// Routes import
import mailRoutes from "./routes/mail.router";

dotenv.config();

const app = express();
// const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// API ROUTING
app.use("/api/v1/mail", mailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
