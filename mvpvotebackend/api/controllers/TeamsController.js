/**
 * TeamsController
 *
 * @description :: Server-side logic for managing teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  allPlayers: function (req, res) {
    return res.json(1);
    // Find the user that owns the tutorial
    /*Teams.findOne({
        username: req.param('teamID'),
      })
      .populate('Players')
      .exec(function (err, foundTeam) {
        if (err) return res.negotiate(err);
        if (!foundTeam) return res.notFound();

        // Assure that a user cannot follow themselves.  This is a secondary
        // check to the front end which we can't trust.
        if (foundUser.id === req.session.userId) {
          return res.forbidden();
        }

        // Add the currently authenticated user-agent (user) as
        // a follower of owner of the tutorial
        foundUser.followers.add(req.session.userId);
        foundUser.save(function (err) {
          if (err) return res.negotiate(err);

          // requery to get user changes
          User.findOne({
              username: req.param('username'),
            })
            .populate('followers')
            .populate('following')
            .exec(function (err, updatedUser) {
              if (err) return res.negotiate(err);
              if (!updatedUser) return res.notFound();

              return res.json({
                numOfFollowers: updatedUser.followers.length,
                numOfFollowing: updatedUser.following.length,
                followers: updatedUser.followers,
                following: updatedUser.following
              });
            });
        });
      });*/
  },
};
