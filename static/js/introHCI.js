'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	$("#testjs").text("Please wait...");
	$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	$("a.thumbnail").click(projectClick);
	// Asking to be notified of clicks on element #submitBtn using
	// its click method
	$("#submitBtn").click(updateProject); 
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $("#jumbotron h1");
    jumbotronHeader.text(projectTitle);

        var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(containingProject).fadeToggle();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}