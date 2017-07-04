/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  comein: function (req, res) {
    return res.json(req);
    /*    Users.findOne({
            email: req.param('email'),
          })
          .exec(function (err, foundUser) {
           if (err) return res.negotiate(err);
                    //new user: add
                    //old user: fetch
                    if (!foundUser) {

                      Users.create({
                        email: req.param('email')
                      }).exec(function (err, newUser) {
                        return res.json({
                          username: newUser.id
                        });
                      });

                    }
                    return res.json({
                      username: foundUser.id
                    });
            return res.json(foundUser);
          });*/
  },
};
