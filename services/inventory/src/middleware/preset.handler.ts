import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

const middleware = [
  cors(),
  morgan("dev"),
  express.json(),
  express.urlencoded({ extended: false }),
];

export default middleware;
