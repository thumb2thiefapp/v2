var mongoose = require('mongoose');

var Licence = mongoose.model('Licence', {
  key: {
    type: String,
    required: true,
    unique: true
  },
  keyfor: {
    type: String,
    default: "empty"
  },
  active: {
    type: Boolean,
    default: false
  },
  ad: {
    type: String,
    default: "empty"
  },
  ed: {
    type: String,
    default: "empty"
  },
  deviceid: {
    type: String,
    trim: true,
    default: "empty"
  },
  days: { //actually days
    type: Number,
    default: 1
  },
  reg: { //total registration of other user
    type: Number,
    default: 1
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Licence};
