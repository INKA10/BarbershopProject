//export appointment tablet
module.exports = (sequelize,DataTypes) => {

  var Appointment = sequelize.define('Appointment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    appointmentFrom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    appointmentTo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    appointmentDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wait_time: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    rating: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    feedback: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    serviceId:{
      type: DataTypes.INTEGER,
    }

  });
////////////////////////////////////////////////////////////////////////////////////////////// 
// Temporarily commented out  the associate with the Employee model to get the app to run.
//////////////////////////////////////////////////////////////////////////////////////////////
  

  //Associate with
  // Appointment.associate = models => {

  //   Appointment.belongsTo(models.Employee,{
  //     EmployeeId: {
  //       allowNull: false
  //     }
  //   });
  //   Appointment.belongsTo(models.User,{
  //     UserID: {
  //       allowNull: false
  //     }
  //   });
  // };

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
  
  
  return Appointment;
};
