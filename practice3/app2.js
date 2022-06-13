import express from "express";

const app = express();

const myLogger = (req, res, next) => {
  console.log("Logged");
  req.user = "kim";
  next("route");
};

app.use(myLogger);

app.get(
  "/",
  (req, res, next) => {
    if (true) {
      next("route");
    } else {
      console.log("실행 안됨");
      next();
    }
  },
  (req, res, next) => {
    console.log("실행 될까?");
  }
);

app.get("/", (req, res) => {
  console.log("실행됨");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ status: "fail" });
});

app.listen(3000);

// Looged
// 실행됨
