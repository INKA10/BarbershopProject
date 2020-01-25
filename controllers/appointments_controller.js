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

  exports.getAppointments = function(req, res) {
      // var cool = new Date();
      // var nowDate = moment(cool).format("YYYY/MM/DD");
      // var timeNow = moment(cool).format("LT");

      // db.Appointment.findAll({
      //   where: {
      //     username: req.user.id
      //   }
      // }).then(function(dbAppointment) {
      //   console.log(dbAppointment);
      //   res.render('appointment/appointment', {
      //     layout: 'main-appointments',
      //     Appointment: dbAppointment
      //   });
      // });


    var cool = new Date();
    // var Sequelize = require("sequelize")
    // const Op = Sequelize.Op

    console.log(cool)
    var nowDate = moment(cool).format("YYYY/MM/DD");
    var timeNow = moment(cool).format("LT");

    console.log(nowDate + " " + timeNow)
    var momentDateTime = (nowDate + " " + timeNow)
    db.Appointment.findAll({
        order: [
          ["reservation_date"],
          ["reservation_time"]
        ],

        where: {
          reservation_date: {
            [Op.gte]: nowDate
          }
        }
      })
      .then(function (dbAppointment) {
        console.log(dbAppointment);
        res.render(dbAppointment);
      });
};

exports.getBarberAppointments = function(req, res) {
  var cool = new Date();
    var Sequelize = require("sequelize")
    const Op = Sequelize.Op



    // console.log(cool)
    var nowDate = moment(cool).format("YYYY/MM/DD");
    var timeNow = moment(cool).format("LT");
    db.Appointment.findAll({
        order: [
          ["reservation_date"],
          ["reservation_time"]
        ],

        where: {
          barber_name: req.params.barberId,
          reservation_date: {
            [Op.gte]: nowDate
          }
        }
      })
      .then(function (dbAppointment) {
        res.json(dbAppointment);
      });
};