var db  = require('../models');

// exports.index = function(req, res) {
//     res.render('appointments/appointments');
// };

exports.index = function(req, res) {
    db.Trip.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbTrip) {
      console.log(dbTrip);
      res.render('appointments/appointments', {
        layout: 'main-appointments',
        trip: dbTrip
      });
    });
  };
