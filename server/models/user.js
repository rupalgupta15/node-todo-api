var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email : {
    type : String,
    required : true,
    minlength : 1,
    trim : true
  },
  password : {
    type : String
  }
});
//
// var newUser = new User({
//   email : " rupalg@yahoo.com "
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
//   console.log('Unable to save the User',e);
// });

module.exports = {User};
