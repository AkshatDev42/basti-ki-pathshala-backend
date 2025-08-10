import express from "express";
import { registerUser } from "../controller/user.controller.js";
import { getUsers } from "../controller/user.controller.js";

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/list").get(getUsers);

export default router;