import express from "express";
import { fsRouter } from "../Modules/fs/router.fs";
import { greetingRouter } from "../Modules/greetings/router.greetings";

export const mainRouter = express.Router();

const allRoutes = [
  {
    path: "/",
    element: greetingRouter,
  },
  {
    path: "/fs",
    element: fsRouter,
  },
];

allRoutes.forEach((route) => mainRouter.use(route.path, route.element));
