import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Todo } from "../models/todo.model.js";
import mongoose from "mongoose";

const addTodo = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    throw new ApiError(400, "Text field is required");
  }

  const newTodo = await Todo.create({ text });

  return res
    .status(201)
    .json(new ApiResponse(201, newTodo, "Todo created successfully!"));
});

export { addTodo };
