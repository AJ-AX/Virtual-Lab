const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

let UserSchema = mongoose.Schema({    
    username: {
      type: String,
      index:true
    },
    password: {
      type: String
    },
    email: {
      type: String
    },
  });


let User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getByUsername = (username, callback) => {
    let query = {username: username};
    User.findOne(query, callback);
}

module.exports.getById = (id, callback) => {
    User.findByID(id, callback);
}

module.exports.validPassword = function(inputPassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
    });
  }