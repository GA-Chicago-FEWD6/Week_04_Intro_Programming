// --- FINDING ELEMENTS ---
// travers the DOM and find/select elements to work with

// .find()

// .children()

// .parent()

// .siblings()


// --- GET/SET CONTENT ---
// Get/change content of elements, attributes, and text nodes

// .html()

// .attr()

// .css()

// .addClass()

// .removeClass()

// .toggleClass()


// --- ADD EFFECTS/ANIMATION ---
// Add effects and animation to parts of the page

// .show()
//$('h1').show();
// .hide()
//$('h1').hide();
// .fadeIn()
//$('h1').fadeIn(700);
// .fadeOut()
//$('img').fadeOut(2000);
// .slideUp()
//$('ol').slideUp(2000);
// .slideDown()
$('h1').slideDown();
// .slideToggle()


// --- CREATE EVENT LISTENERS ---
// Select elements and have them 'listen' for certain event to trigger changes/functions

// .on('click')
$('h1').on('click', function() {
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