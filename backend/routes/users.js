import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/");
router.get("/test", getUsers);
router.post("/test", addUser);
router.put("/test:id", updateUser);
router.delete("/test:id", deleteUser);

export default router;
