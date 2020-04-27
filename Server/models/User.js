const mongoose = require('mongoose');
// const bcrypt =  require ('bcrypt');

const UserSchema = new mongoose.Schema({
  googleId: String,
  isDeleted: {
    type: Boolean,
    default: false
  },
  timestamp:{
    type: Date,
    default: Date.now()
  },
});

// UserSchema.methods.generateHash = function(password){
//   return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
// };


// UserSchema.methods.validPassword =function(password){
// //   return bcrypt.compareSync(password,this.password);
// };

module.exports = mongoose.model('User', UserSchema);
