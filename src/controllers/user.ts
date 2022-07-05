import { Request, Response } from "express";
import { User } from "../models/User";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);
    const user = await User.findOne({
      where: { name: req.body.name, password: req.body.password },
    });
    if (user) {
      if (!(req.session as any).user) {
        (req.session as any).user = user;
      }
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);

    const user = await User.create({
      ...req.body,
    });
    if (user) {
      if (!(req.session as any).user) {
        (req.session as any).user = user;
      }
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {};
