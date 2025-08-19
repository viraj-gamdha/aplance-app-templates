// Basic auth controller

import Users from "@/models/user.model.js";
import { AuthJwtPayload, IUser } from "@/types/user.type";
import { TryCatch } from "@/utils/async-handler.js";
import ErrorHandler from "@/utils/error-handler.js";
import jwt from "jsonwebtoken";

// Constants
const ACCESS_TOKEN_EXPIRY = 60 * 15; // 15 minutes
const REFRESH_TOKEN_EXPIRY = 60 * 60 * 24 * 7; // 7 days

// Register user
export const signupUser = TryCatch<
  IUser, //ReqBody
  {}, //ReqParams
  {}, //ReqQueries
  {}, //ReqCookies
  {} //Response
>(async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!name) {
    return next(new ErrorHandler(400, "Name is required!"));
  }

  if (!email) {
    return next(new ErrorHandler(400, "Email is required!"));
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new ErrorHandler(400, "Invalid email format!"));
  }

  if (!password) {
    return next(new ErrorHandler(400, "Password is required!"));
  }

  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    return next(new ErrorHandler(400, "User already exists"));
  }

  // Create user
  await Users.create({
    name,
    email,
    password, // Password will be hashed by the pre-save hook
  });

  return res.json({
    success: true,
    message: "User registered successfully",
    data: {},
  });
});

// Login user
export const loginUser = TryCatch<
  { email: string; password: string }, //ReqBody
  {}, //ReqParams
  {}, //ReqQueries
  {}, //ReqCookie
  { id: string; name: string; email: string; access_token: string } //Response
>(async (req, res, next) => {
  // const { email, password } = req.body; //To avoid "undefined" error
  const email = req.body.email;
  const password = req.body.password;

  // Find user
  const user = await Users.findOne({ email });
  if (!user) {
    return next(new ErrorHandler(401, "Invalid credentials"));
  }

  // Validate password using comparePassword method
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return next(new ErrorHandler(400, "Invalid credentials"));
  }

  const accessToken = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );

  const refreshToken = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: REFRESH_TOKEN_EXPIRY * 1000,
  });

  return res.json({
    success: true,
    message: "Login successful",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      access_token: accessToken,
    },
  });
});

// Refresh access token
export const refreshToken = TryCatch<
  {}, //ReqBody
  {}, //ReqParams
  {}, //ReqQueries
  { refresh_token: string }, //ReqCookies,
  Partial<IUser> & { id: string; access_token: string } //Response
>(async (req, res, next) => {
  const refreshToken = req.cookies?.refresh_token;

  if (!refreshToken) {
    return next(new ErrorHandler(401, "Unauthorized!"));
  }

  let payload;
  try {
    payload = jwt.verify(
      refreshToken,
      process.env.JWT_SECRET!
    ) as AuthJwtPayload;
  } catch (err) {
    return next(new ErrorHandler(403, "Forbidden"));
  }

  // Find user
  const user = await Users.findById(payload?.userId);
  if (!user) {
    return next(new ErrorHandler(401, "Invalid credentials"));
  }

  const newAccessToken = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );

  const newRefreshToken = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  res.cookie("refresh_token", newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: REFRESH_TOKEN_EXPIRY * 1000,
  });

  return res.json({
    success: true,
    message: "Access token refreshed successfully",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      access_token: newAccessToken,
    },
  });
});

// Logout user
export const logoutUser = TryCatch(async (req, res) => {
  res.clearCookie("refresh_token", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res.json({
    success: true,
    message: "Logout successful",
    data: {},
  });
});
