const express = require("express")
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const config = require('./config');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const knexFile = require('./knexfile').development;
const knex = require('knex')(knexFile);
const Method = require("./method")
const Router = require("./router")
const method = new Method(knex)
const router = new Router(method)

const passport = require("passport");
app.use(passport.initialize());

require('./auth')(passport)

app.post('/login', async (req, res) => {
    let users = await knex.select('*').from('user')
    console.log(users)
    if (req.body.email && req.body.password) {
        let email = req.body.email;
        let password = req.body.password;
        let user = users.find((u) => {
            console.log(u.email)
            console.log(u.password)
            return u.email === email && u.password === password;
        });


        if (user) {
            let payload = {
                id: user.id
            };
            let token = jwt.sign(payload, config.jwtSecret);
            res.json({
                token: token
            });
    
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
})


app.use("/", passport.authenticate("jwt", {session: false}), router.router())

app.listen(8000, () => {
    console.log("Application started at port:8000");
});