import express from "express";
import { CreateHabits, deleteHabits, getHabits, getHabitsById, UpdatedHabits } from "../controllers/habits-controller.js";

const HabitsRouter = express.Router();

HabitsRouter.get("/", getHabits);
HabitsRouter.get("/:id", getHabitsById);
HabitsRouter.post("/" , CreateHabits);
HabitsRouter.delete("/:id" , deleteHabits);
HabitsRouter.put("/:id" , UpdatedHabits);

export default HabitsRouter;
