var express = require('express');
var router  = express.Router();
var moment = require("moment")
var db = require('../models');

exports.index = function(req, res) {
    res.render('appointments/appointments');
};

// make appointment
exports.makeAppointment = function(req, res) {

    console.log("this is req.body", req.body);
    db.Appointment.create({
        customer_name: req.body.customer_name,
        reservation_date: req.body.reservation_date,
        barber_name: req.body.barber_name,
        reservation_time: req.body.reservation_time,
        customer_phone: req.body.customer_phone,
        customer_email: req.body.customer_email
      })
      .then(function (dbAppointment) {
        console.log(dbAppointment)

        // console.log("this isdbReservation:", dbReservation)
        //       res.json(dbPost);
        //     });
        // });
        res.json({
          dbAppointment
        });
      })
    // .catch(function (err) {
    //   // handle error;
    //   console.log("appointment already booked")
    // });
  
  };