import { User } from "../models/User";
import { Subject } from "../models/Subject";

export const migrate = async () => {
  await User.sync();
  await Subject.sync();
};
