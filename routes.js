module.exports = function(app){

	const application = require('./routes/application');
	const users = require('./routes/users');
	const pricing = require('./routes/pricing');
	const appointments = require('./routes/appointments');

	app.use('/', application);
	app.use('/users', users);
	app.use('/pricing', pricing);
	app.use('/appointments', appointments);
//other routes..
}