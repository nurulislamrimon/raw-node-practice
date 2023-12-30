import { RequestHandler } from "express";

export const greetingController: RequestHandler = (req, res) => {
  res.send({
    success: true,
    message: "Hello! Welcome to the api of practice.",
  });
};
