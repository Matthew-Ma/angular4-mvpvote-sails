/**
 * PlayersController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('lodash');
module.exports = {
  vote: function (req, res) {
    console.log(req);

    var allowedParameters = [
      "playerID"
    ]

    var data = _.pick(req.body, allowedParameters);


    sails.log('playerID is:', req.body.playerID);

    Players.findOne({
        id: req.body.playerID,
      })
      .exec(function (err, finn) {

        if (err) {
          return ResponseService.json(400, res, "User could not be created", err.Errors);
        }
        sails.log('Finn is:', finn);
        //new user: add
        //old user: fetch
        if (finn) {
          Players.update({
            id: finn.id
          }, {
            votes: +(finn.votes + 1)
          }).exec(function (err, updated) {
            sails.log('updated is:', updated);
            if (err) {
              return res.serverError(err);
            }
            var responseData = {
              id: updated[0].id,
              byTeams: updated[0].byTeams
            }

            sails.log('updated is:', updated);

            Users.update({
              email: req.body.currentUser
            }, {
              voted: 1
            }).exec(function (err, updated) {
              if (err) {
                return res.serverError(err);
              }
              sails.log('updated is:', updated);
            });

            return ResponseService.json(200, res, "User updated", responseData);
          });

        } else {
          if (err) {
            return res.serverError(err);
          }
        }


      });

  },
};
