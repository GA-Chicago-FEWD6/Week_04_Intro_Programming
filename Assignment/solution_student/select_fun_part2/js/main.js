// 1.	Slide the header up when it is clicked on.
$('header').on('click', function(){
	$('header').slideUp(300);
})

// 2.	Remove the purplebox class
$('.purplebox').removeClass('purplebox');

// 3.	Hide all of the div’s in #row4
$('#row4').hide('div');

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('.add-para').append('<p>I have been added</p>');

// 5.	Add a class in your css and add it to all items with the class .box
$('.box').addClass('my-class');


// 6.	Show the footer when the anchor in #box2 is clicked
$('#box2 a').on('click', function(){
	$('footer').show(300);
});

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3 span').addClass('my-span-class');

// 8.	Change the background color of all the articles'
$('article').css('background-color', '#F3008D');

// 9.	Change the font color of all the articles in row 2
$('#row2 article').css('color', '#F2F2F2');

// 10.	Select the h4 in #box11 and hide the span inside of #box11 using the .siblings() function
$('#box11 h4').siblings('span').hide();


// 11.	Clicking on #box7 should hide the span within the h2
$('#box7').on('click', function(){
	$('h2 span').hide();
});

// 12.	Add a h3 to the beginning of #box12
$('#box12').prepend('<h3>Adding this h3</h3>');


// 13.	SlideUp all the h1s on the page
$('h1').slideUp();

// 14.	Add a unique class to your CSS and add it to the articles in #row1
$('#row1 article').addClass('my-unique-class');

// 15.	Clicking reset should fade all boxes, headers and footers in and remove any selected classes
$('#reset').on('click', function(){
	$('.box').fadeIn(300);
	$('#row4').fadeIn(400);
	$('header').fadeIn(500);
	$('footer').fadeIn(600);
	$('.box').removeClass('my-class');
	$('span').removeClass('my-span-class');
	$('#row1 article').removeClass('my-unique-class');
});








