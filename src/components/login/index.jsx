import "./style.scss";

export { Login } from "./login";
export { Register } from "./register";

const express = require("express")
connection = sqlite3.connect(config.register.db)

const app = express();

app.use(express.json());

const db = sqlite3.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

//app.post('/register', (req, res)=> {
    
//const username = req.body.username
//const username = req.body.email
//const username = req.body.password


//db.query
    //("INSERT INTO people (username, email, password) VALUES (?,?,?)", 
    //[username, email, password], 
    //(err, result) =>{
        //console.log(err);

    //})
//})

