import { deleteUser, updateUserDetail } from "@/controllers/user.controller.js";
import { verifyAuth } from "@/middlewares/verify-auth.middleware.js";
import { Router } from "express";

const userRoutes = Router();

// Auth middleware
userRoutes.use(verifyAuth);

userRoutes.put("/update", updateUserDetail);
userRoutes.delete("/remove", deleteUser);

export default userRoutes;
