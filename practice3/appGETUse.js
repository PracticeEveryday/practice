import express, { Router } from "express";

const router = Router();

const app = express();

app.use("/user", (req, res, next) => {
  console.log("test");
  next();
});
app.use("/user", router);
router.get("/", (req, res) => {
  res.status(200).json({ status: "user" });
});

app.get("/user/1", (req, res) => {
  res.status(200).json({ status: "user/1" });
});

app.listen(3000);
