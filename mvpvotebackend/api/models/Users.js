/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require("bcrypt");
module.exports = {

  attributes: {
    email: {
      type: 'email',
      required: true
    },
    voted: {
      type: 'boolean',
      defaultsTo: 0
    },
    toJSON: function () {
      var obj = this.toObject()
      delete obj.password
    }
  }
};
