import { DataTypes } from "sequelize";
import { database } from "../database/connection";

export const User = database.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

      validate: {
        len: [3, 8],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 8],
      },
    },
  },
  {
    timestamps: true,
  }
);
