// Init Packages

const express = require('express');
const app = express();
const api = express.Router();
const PORT = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

// Connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/srlab", {newUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => console.log("Established connection to database."));

api.route("/login").post(function(req, res){
    console.log("Recieved LOGIN request.");
    //TODO: Implement login using passportjs
});

api.route("/signup").post(function(req, res){
    console.log("Recieved SIGNUP request.");
    //TODO: Implement auth using passportjs
});

app.use('/api', api);
app.listen(PORT, () => console.log("Server is running on port " + PORT));
