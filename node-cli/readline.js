#!/usr/bin/env node
const readline = require("readline");

const rl = readline.createInterface({
  // 터미널로 받을게
  input: process.stdin,
  // 화면으로 결과 받을게
  output: process.stdout,
});

console.clear();
const answerCallback = (answer) => {
  if (answer === "Y") {
    console.log("감사합니다.");
    rl.close();
  } else if (answer === "N") {
    console.log("죄송해요");
    rl.close();
  } else {
    console.clear();
    console.log("Y 또는 N만 입력하세요");
    rl.question("예제 재미있나요? Y/N  ", answerCallback);
  }
};
rl.question("예제 재미있나요? Y/N  ", answerCallback);
