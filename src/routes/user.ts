import { deleteUser, updateUserDetail } from "@/controllers/user.js";
import { verifyAuth } from "@/middlewares/verifyAuth.js";
import { Router } from "express";

const userRoutes = Router();

// Auth middleware
userRoutes.use(verifyAuth);

userRoutes.put("/update", updateUserDetail);
userRoutes.delete("/remove", deleteUser);

export default userRoutes;
