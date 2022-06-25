import { Request, Response } from "express";
import { User } from "../models/User";

export const login = async (req: Request, res: Response): Promise<void> => {};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create({
      ...req.body,
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(req.body);
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {};
