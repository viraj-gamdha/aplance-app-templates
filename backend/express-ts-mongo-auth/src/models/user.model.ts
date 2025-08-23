import mongoose, { Schema, UpdateQuery } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "@/types/user.type";

export interface IUserDoc extends IUser, mongoose.Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUserDoc>({
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if password not modified

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});

// for findOneAndUpdate method to update password
userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  // Narrow the type
  if (update && typeof update === "object" && "password" in update) {
    const updateQuery = update as UpdateQuery<{ password: string }>;

    if (updateQuery.password) {
      const salt = await bcrypt.genSalt(10);
      updateQuery.password = await bcrypt.hash(updateQuery.password, salt);
      this.setUpdate(updateQuery);
    }
  }

  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const Users = mongoose.model<IUserDoc>("Users", userSchema);
export default Users;
