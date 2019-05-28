// Init Packages

const express = require('express');
const app = express();
const api = express.Router();
const PORT = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const passport = require('passport');
const User = require('./models/Users');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/srlab", {newUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => console.log("Established connection to database."));

// Sessions

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Routing

api.route("/login").post(function(req, res){
    console.log("Recieved LOGIN request.");
    //TODO: Implement login using passportjs
});

api.route("/signup").post(function(req, res){
    console.log("Recieved SIGNUP request.");
    //TODO: Implement auth using passportjs
});

api.route("/register").post(function(req, res){
    let password = req.body.password;
    let confirmPwd = req.body.confirmPwd;
    if(password == confirmPwd){
        let newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: password
        });
        User.createUser(newUser, (err, user) => {
            if(err){throw err;}
            res.send(user).end();
        })
    }else{
        req.status(500).send('{errors: "passwords don\t match."}');
    }
});

app.use('/api', api);
app.listen(PORT, () => console.log("Server is running on port " + PORT));
