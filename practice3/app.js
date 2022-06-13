import express from "express";
import bookRouter from "./books.js";

import config from "./config/index.js";

const PORT = config.PORT;
const app = express();

bookRouter(app);

app.listen(PORT, console.log(`${PORT}번 포트 온`));
