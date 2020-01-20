var nameInput = $("#tripName"),
		destinationInput = $("#autocomplete"),
		methodOfTransportInput = $("#methodOfTransport"),
		arrivalDateInput = $("#datepicker");

var url = window.location.search;
var appointmentId;
var userId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;

function submitAppointment(appointment) {
  $.post("/appointments/new", appointment, function() {
    window.location.href = "/appointments";
  });
}

function updateAppointment(appointment) {
    $.ajax({
      method: "PUT",
      url: "/appointments",
      data: trip
    })
    .done(function() {
      window.location.href = "/appointments";
    });
  }

function handleFormSubmit(event) {
	event.preventDefault();
	// Wont submit the post if we are missing a body, title, or author
	if (!destinationInput.val().trim() || !methodOfTransportInput.val().trim() || !arrivalDateInput.val()) {
	  return;
	}
	// Constructing a newPost object to hand to the database
	var newAppointment = {
	  name: nameInput
	    .val()
	    .trim(),
	  destination: destinationInput
	    .val()
	    .trim(),
	  methodOfTransport: methodOfTransportInput
	  	.val()
	  	.trim(),
	  arrivalDate: arrivalDateInput
	  	.val()
	  	.trim()
	};

	// If we're updating a post run updatePost to update a post
	// Otherwise run submitPost to create a whole new post
	if (updating) {
	  newAppointment.id = appointmentId;
	  updateAppointment(newAppointment);
	}
	else {
	  submitAppointment(newAppointment);
	}
}
// Make sure we add the ID to the appointment form on the front end
$("#appointmentForm").on("submit", handleFormSubmit);