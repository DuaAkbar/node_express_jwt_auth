import Habits from "../models/Habits.js";
import mongoose from "mongoose";

export const getHabits = async (req, res) => {
  const Habities = await Habits.find();
  return res.status(200).json({
    success: true,
    habits: Habities,
    count: Habities.length,
  });
};

export const getHabitsById = async (req, res) => {
  console.log(req.params);

  const habitiesById = await Habits.findById(req.params.id);

  if (habitiesById) {
    res.status(200);
    res.json({
      success: true,
      habit: habitiesById,
    });
  } else {
    res.status(404);
    res.json({
      success: false,
      message: `Habit not found!`,
    });
  }
};

export const CreateHabits = async (req, res) => {
  const body = req.body;

  if (
    body?.UserName &&
    body?.Title &&
    body?.Description &&
    body?.Frequency &&
    body?.StartDate &&
    body?.IsActive !== undefined
  ) {
    const createdHabit = await Habits.create(body);

    return res.status(201).json({
      success: true,
      habitId: createdHabit?._id,
      message: "Habit has been created successfully",
    });
  }

  return res.status(404).json({
    success: false,
    message: "Invalid habit data",
  });
};

export const deleteHabits = async (req, res) => {
  const habitiesById = await Habits.findById(req.params.id);

  console.log(habitiesById);

  if (habitiesById) {
    await Habits.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({
      success: true,
      habitId: habitiesById?._id,
      message: "Habit has been Deleted successfully",
    });
  }
  return res.status(404).json({
    success: false,
    message: `Habit not found on id ${req.params.id}`,
  });
};

export const UpdatedHabits = async (req, res) => {
  const habitiesById = await Habits.findById(req.params.id);

  if (habitiesById) {
    await Habits.findByIdAndUpdate(req.params.id , req.body);
    res.status(200);
    res.json({
      success: true,
      message: "Habit has been Updated successfully",
    });
  }
  return res.status(404).json({
    success: false,
    message: `Habit not found on id ${req.params.id}`,
  });
};
