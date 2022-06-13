import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  next();
  console.log(1);
  console.log(2);
});

app.get("/", (req, res, next) => {
  console.log("실행");
  res.status(200).json({
    status: "succ",
  });
  console.log("res 다음 줄 ");
  console.log("res 다음, 다음 줄 ");
  next();
});

app.get("/", (req, res) => {
  console.log("마지막 get");
});

app.length;
app.listen(3000);

// 실행
// res 다음 줄
// res 다음, 다음 줄
// 마지막 get
// 1
// 2
