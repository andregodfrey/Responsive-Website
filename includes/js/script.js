/*

My Custom JS
============

Author:  Emre
Updated: November 2014

*/

$(function() {

	$('#alertME').click(function(e) {

		e.preventDefault();

		$('#successAlert').slideDown();
	});

	$('a.pop').click(function(e) {
		
		e.preventDefault();
	
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();

});