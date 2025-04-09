import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const PORT = process.env.PORT || 8800;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
// app.use("/api/users", userRoutes);
// app.listen(8800);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  app.use((req, res, next) => {
    console.log(`Incoming: ${req.method} ${req.url}`);
    next();
  });
});
