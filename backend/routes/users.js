// import express from "express";
// import {
//   getUsers,
//   addUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/user.js";

// const router = express.Router();

// router.get("/", getUsers);
// router.post("/", addUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

// export default router;

// controllers/user.js
import { ddb } from "../db.js";
import {
  PutCommand,
  GetCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const TABLE_NAME = "Students";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const data = await ddb.send(new ScanCommand({ TableName: TABLE_NAME }));
    res.status(200).json(data.Items);
  } catch (err) {
    console.error("DynamoDB Scan Error:", err);
    res.status(500).json("Error fetching users");
  }
};

// Add user
export const addUser = async (req, res) => {
  const { name, email, phone, program } = req.body;
  const uuid = crypto.randomUUID();
  try {
    await ddb.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          id: uuid, // use UUID in real projects
          name,
          email,
          phone,
          program,
        },
      })
    );
    res.status(200).json("User added successfully!");
  } catch (err) {
    console.error("DynamoDB Put Error:", err);
    res.status(500).json("Error adding user");
  }
};

// Update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, program } = req.body;

  try {
    await ddb.send(
      new UpdateCommand({
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression:
          "set #name = :name, email = :email, phone = :phone, program = :program",
        ExpressionAttributeNames: { "#name": "name" },
        ExpressionAttributeValues: {
          ":name": name,
          ":email": email,
          ":phone": phone,
          ":program": program,
        },
      })
    );
    res.status(200).json("User updated successfully!");
  } catch (err) {
    console.error("DynamoDB Update Error:", err);
    res.status(500).json("Error updating user");
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await ddb.send(
      new DeleteCommand({
        TableName: TABLE_NAME,
        Key: { id },
      })
    );
    res.status(200).json("User deleted successfully!");
  } catch (err) {
    console.error("DynamoDB Delete Error:", err);
    res.status(500).json("Error deleting user");
  }
};
