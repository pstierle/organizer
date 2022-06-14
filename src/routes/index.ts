import { Router } from "express";
import * as userController from "../controllers/user";
import * as universityController from "../controllers/university";
import * as subjectController from "../controllers/subject";

export const router = Router();

router.post("/login", userController.login);
router.post("/register", userController.register);

router.get("/universities", universityController.index);

router.put("/subject", subjectController.store);
router.get("/subject/:id", subjectController.index);
router.get("/subjects", subjectController.show);
router.delete("/subject/:id", subjectController.destroy);
router.put("/subject/:id", subjectController.update);
