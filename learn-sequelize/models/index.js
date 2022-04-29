const path = require("path");
const Sequelize = require("sequelize");

// env는 dotenv 내의 NODE_ENV 인데 지금은 개발 용이니까
// development : 개발용
// production : 패포용
// test : 테스트용
const env = process.env.NODE_ENV || "development"; // production => 배포용으로 바뀜

const config = require("../config/config.json")[env]; // => config 파일 가져오면 객체로 오니까 [env(development)]쓸거다!!;
// sequelize 인스턴트화
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);

module.exports = db;
