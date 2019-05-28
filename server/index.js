// Init Packages

const express = require('express');
const app = express();
const api = express.Router();
const PORT = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy();
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

// Passport Strategy

passport.use(new localStrategy((username, password, done) => {
    User.getByUsername(username, (err, user) => {
        if(err){throw err;}
        if(!user){
            return done(null, false, {message: 'Unknown User'});
        }
        User.comparePassword(password, user.password, (err, match) => {
            if(err){throw err;}
            if(match){
                return done(null, user);
            }
            else{
                return done(null, false, {message: 'Invalid password'});
            }
        });
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getById(id, (err, user) => {
        done(err, user);
    });
});

// Routing

api.route("/login").post(function(req, res){
    passport.authenticate('local', (req, res) => {
        res.send(req.user);
    });
});

api.route("/user").get((req, res) => {
    res.send(req.user);
});

api.get("/logout").get((req, res) => {
    req.logout();
    res.send(null);
})

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
