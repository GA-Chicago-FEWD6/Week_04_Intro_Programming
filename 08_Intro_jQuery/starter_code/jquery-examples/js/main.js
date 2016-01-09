// --- FINDING ELEMENTS ---
// travers the DOM and find/select elements to work with

// .find()
$('ol').find('.special');
// .children()
$('footer').children('');
// .parent()
$('.special').parent('');
// .siblings()
$('ol h2').siblings('');


// --- GET/SET CONTENT ---
// Get/change content of elements, attributes, and text nodes

// .html()
$('h1').html('Yeah, I know that!');
// .attr()
$('img').attr('src', 'images/jackie.jpg');
// .css()

// .addClass() 
$('h2').addClass('');

// .removeClass()
$('h2').removeClass('.special');
// .toggleClass()


// --- ADD EFFECTS/ANIMATION ---
// Add effects and animation to parts of the page

// .show()
$('h1').show();

// .hide()
$('h1').hide();

// .fadeIn()
$('h1').fadeIn(5000);

// .fadeOut()
$('img').fadeOut(3000);

// .slideUp()
$('ol').slideUp(2000);

// .slideDown()
$('ol').slideDown(6000);

// .slideToggle()

// --- CREATE EVENT LISTENERS ---
// Select elements and have them 'listen' for certain event to trigger changes/functions

// .on('click')
$('h1').on('click', function () {
	$('h1').slideToggle(1000);
});

// Others: 
// .on('focus')

// .on('blur')

// .on('change')

// .on('keydown')

// .on('keyup')

// .on('mouseup')

// .on('mousedown')

// .on('mouseover')

// .on('submit')

// .on('resize')

// .on('scroll')