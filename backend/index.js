import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
// app.use("/api/users", userRoutes);
app.listen(8800);
app.listen(PORT, () => {});
