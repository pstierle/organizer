import { Request, Response } from "express";
import { Subject } from "../models/Subject";

export const store = async (req: Request, res: Response): Promise<void> => {
  const subject = await Subject.create({
    ...req.body,
  });
  res.status(200).json(subject);
};
export const index = async (req: Request, res: Response): Promise<void> => {
  const subject = await Subject.findByPk(req.params.id);
  res.status(200).json(subject);
};
export const show = async (req: Request, res: Response): Promise<void> => {
  const subjects = Subject.findAll();
  res.status(200).json(subjects);
};
export const destroy = async (req: Request, res: Response): Promise<void> => {
  try {
    await Subject.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Fach erfolgreich gelöscht.");
  } catch (e) {
    res.status(404).json("Das Fach existiert nicht.");
  }
};
export const update = async (req: Request, res: Response): Promise<void> => {};
