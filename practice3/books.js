import { Router } from "express";

export default (app) => {
  const router = Router();
  app.use("/books", router);

  router.get("/", (req, res) => {
    res.send("Get a random book");
  });

  router.post("/", (req, res) => {
    res.send("Add a book");
  });

  router.put("/", (req, res) => {
    res.send("Update the book");
  });
};
