import { DataTypes } from "sequelize";
import { database } from "../database/connection";
import { User } from "./User";

export const Subject = database.define(
  "Subject",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    professor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
