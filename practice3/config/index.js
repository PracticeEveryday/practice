import dotenv from "dotenv";

const foundEnv = dotenv.config();

if (foundEnv.error) {
  throw new Error(".env 파일이 없습니다!!");
}

export default {
  PORT: process.env.PORT,
};
