import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
// const router = express.Router();

// router.get("/api/users", getUsers);
// router.post("/api/users", addUser);
// router.put("/api/users/:id", updateUser);
// router.delete("/api/users/:id", deleteUser);

// export default router;
