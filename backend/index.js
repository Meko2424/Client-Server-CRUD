import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import serverles from "serverless-http";

const port = 8800;
const app = express();
app.use(express.json());
if (process.env.DEVELOPMENT) {
  app.use(cors());
}

app.use("/", userRoutes);

if (process.env.DEVELOPMENT) {
  app.listen(port, () => {
    console.log("Server running on port 8800");
  });
}

export const handler = serverles(app);
