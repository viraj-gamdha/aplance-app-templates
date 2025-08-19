import { JwtPayload } from "jsonwebtoken";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface AuthJwtPayload extends JwtPayload {
  userId: string;
  email: string;
}
