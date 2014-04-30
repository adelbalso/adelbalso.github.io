$(function() {
	$('#about').hide().fadeIn(600)
	$('#work').hide()
	$('#contact').hide()
	$('#blog').hide()

	$('.navAbout').click(function() {
	  $('.navAbout a').addClass("active")
		$('#blog, #work, #contact').hide()
	  $('.navWork a, .navContact a, .navBlog a').removeClass("active")
		$('#about').fadeIn(600)
	});

	$('.navWork').click(function() {
	  $('.navWork a').addClass("active")
		$('#blog, #about, #contact').hide()
	  $('.navAbout a, .navContact a, .navBlog a').removeClass("active")
		$('#work').fadeIn(600)
	});

	$('.navContact').click(function() {
	  $('.navContact a').addClass("active")
		$('#blog, #work, #about').hide()
	  $('.navWork a, .navAbout a, .navBlog a').removeClass("active")
		$('#contact').fadeIn(600)
	});

	$('.navBlog').click(function() {
	  $('.navBlog a').addClass("active")
		$('#contact, #work, #about').hide()
	  $('.navWork a, .navContact a, .navAbout a').removeClass("active")
		$('#blog').fadeIn(600)
	});
});

$(function() {
    FastClick.attach(document.body);
});