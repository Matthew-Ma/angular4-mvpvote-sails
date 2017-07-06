/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('lodash');
module.exports = {
  signup: function (req, res) {
    console.log(req);

    var allowedParameters = [
      "email"
    ]

    var data = _.pick(req.body, allowedParameters);

    sails.log('Email is:', req.body.email);

    Users.findOne({
        email: req.body.email,
      })
      .exec(function (err, finn) {
        if (err) {
          return ResponseService.json(400, res, "User could not be created", err.Errors);
        }
        sails.log('Finn is:', finn);
        //new user: add
        //old user: fetch
        if (!finn) {
          Users.create({
            email: req.body.email
          }).exec(function (err, newUser) {
            if (err) {
              return res.serverError(err);
            }
            var responseData = {
              user: newUser,
              token: JwtService.issue({
                id: newUser.id
              })
            }
            sails.log('newUser is:', newUser);
            return ResponseService.json(200, res, "User created", responseData);
          });

        } else {
          var responseData = {
            user: finn,
            token: JwtService.issue({
              id: finn.id
            })
          }
          return ResponseService.json(200, res, "User fetched", responseData);
        }


      });

  },
};
