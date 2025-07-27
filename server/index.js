import express from "express";
import { config } from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import session from "express-session"
config()


const app = express();
const PORT = 3000 || process.env.PORT

// my config
import connectdb from "./config/connectdb.js";


//my controller 
import { signup ,login} from "./controllers/userLoginSignupControll.js";
import { addTodo ,getTodo ,updateToDoSts} from "./controllers/todoControll.js";

// my middlewares
import getUserIdFromJwt from "./middlewares/verifyuser.js";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: "*",
  Credential: true
}))



app.use(cookieParser())

app.use(session({
   secret : `${process.env.SESSION_SERECT}`,
   resave:false,
   saveUninitialized:true,
   cookie:{
    httpOnly:true,
    maxAge:7*24*6000*60*60*24 
   }
}))


app.post("/api/signup",signup)
app.post("/api/login",login)
app.post("/api/addtodo/",getUserIdFromJwt,addTodo)
app.get("/api/gettodo/",getUserIdFromJwt,getTodo)
app.patch("/api/updatestatus/:todoid",updateToDoSts)


app.get("/health", (req, res) => {
  res.status(200).json({
    data: null,
    message: "server is running healthy"
  })
})


app.listen(PORT, () => {
  console.log(`server listen on the port ${PORT}`)
  connectdb()
})