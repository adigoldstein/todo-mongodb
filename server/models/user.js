var mongoose = require('mongoose');


var User =  mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
});
//
// var newUser = new User({
//   email: 'adij82@gmail.com'
// })
//
// newUser.save().then((doc)=> {
//   console.info(`User saved!! ${doc}`);
// }, (err)=> {
//   console.info(`Error happened, ${err}`);
// })

module.exports = {User};