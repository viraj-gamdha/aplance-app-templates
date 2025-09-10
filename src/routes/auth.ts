import {
  loginUser,
  logoutUser,
  refreshToken,
  signupUser,
} from "@/controllers/auth.js";
import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/signup", signupUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/refresh_token", refreshToken);
authRoutes.post("/logout", logoutUser);

export { authRoutes };
