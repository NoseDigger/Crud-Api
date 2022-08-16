import express from "express";
import {
  createUser,
  findUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../controllers/users.js";
const router = express.Router();
//all routes starting at /users
//get all users

router.get("/", getAllUsers);

//create new user
router.post("/", createUser);

//get single user with id
router.get("/:id", findUser);

//delete user with id
router.delete("/:id", deleteUser);

//update user with the same id name

router.patch("/:id", updateUser);

export default router;
