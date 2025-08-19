// Basic user controller

import Users, { IUserDoc } from "@/models/user.model.js";
import { IUser } from "@/types/user.type";
import { TryCatch } from "@/utils/async-handler.js";
import ErrorHandler from "@/utils/error-handler.js";

// Update user details
export const updateUserDetail = TryCatch<
  Partial<IUser>,
  {},
  {},
  {},
  Partial<IUserDoc>
>(async (req, res, next) => {
  const userId = req.userId;
  const name = req.body?.name;
  const email = req.body?.email;
  const password = req.body?.password;

  // Prepare update data
  const updateData: Partial<IUser> = {};

  if (name) updateData.name = name;
  if (email) {
    updateData.email = email;
  }
  if (password) {
    updateData.password = password;
  }

  if (Object.keys(updateData).length === 1) {
    // Only updatedAt
    return next(new ErrorHandler(400, "No valid fields provided for update"));
  }

  const updatedUser = await Users.findOneAndUpdate(
    { _id: userId },
    updateData,
    { new: true } ///Returns the updated doc
  );

  return res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: {
      id: updatedUser?.id,
      name: updatedUser?.name,
      email: updatedUser?.email,
    },
  });
});

// Delete a user
export const deleteUser = TryCatch(async (req, res, next) => {
  const userId = req.userId;

  // Delete the user by ID
  await Users.findByIdAndDelete(userId);

  // clear session
  res.clearCookie("refresh_token", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res.status(200).json({
    success: true,
    data: {},
    message: "User deleted successfully",
  });
});
