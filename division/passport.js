const express = require("express")
const passport = require("passport")
const Strategy = require("passport-local");
const session = require("express-session");
const path = require("path")


const app = express()

// POST 요청 시 Body 사용을 위한 기본코드
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// passport 사용을 위한 미들웨어 기본코드
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());


let user = {
  username : "정지호",
  password : "바보"
}

passport.use(
  new Strategy((username, password, done) => {
    console.log("최초 확인")
    console.log(username, password)
    if(username === user.username && password === user.password) {
      // 로그인 성공
      done(null, user)
    } else {
      done(null, false)
    }
  })
)

passport.serializeUser((user, done) => {
  console.log("처음으로 인증을 진행하고 쿠키를 받는 아이", user)
  done(null, user)
})

passport.deserializeUser((user, done)=> {
  console.log("인증된 정지호", user)
  done(null, user)
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
}))

app.post("/login", (req, res) => {
  const {username, password} = req.body
  console.log(username, password)
  res.send("당신은 정지호입니다!!!")
})

app.get("/login", (req,res) => {
  res.send(`
    <h1> 거짓말쟁이<h1>
    <h2> 당신은 정지호가 아닙니다!<h2>
    <a href ="/">다시 로그인 장소로 돌아가세요!<a>
  `)
})

app.get("/", (req, res) => {
  console.log(req.user)
  if(req.user) {
    res.send(`
    <h1>당신은 정지호에 대해 아주 잘 알고 있군요!!!</h1>
      <p><a href = "/info">정보를 받아가세요</a></p>
      <p><a href ="/logout">로그아웃</a></p>
    `)
    } else {
    res.sendFile(path.join(__dirname, "passport.html"))
  }
})

app.get("/logout", (req, res) => {
  req.logout(); // 내부 세션에서 지워줌.
  res.redirect("/");
});

app.get("/info", (req, res) => {
  if(req.user) {
  res.send(`
  <h1>별명 모음집 : 바보, 멍청이, 돼지, 진짜돼지</h1>
  <ul>
    <li> 이름 : 정지호 </li>
    <li> 나이 : 25세 </li>
    <li> 키 : 173 </li>
    <li> 몸무게 : 150 </li>

  </ul>
  <p><a href ="/">뒤로</a></p>
  <p><a href ="/logout">로그아웃</a></p>
  `)
  }
  else {
    res.send(`
      <h1>정지호 확인 통과 의례를 진행하고 오세요</h1>
      <a href ="/">여기를 클릭하세요</a>
    `)
  }
})


app.listen(3000, console.log("3000번 포트 온!"))