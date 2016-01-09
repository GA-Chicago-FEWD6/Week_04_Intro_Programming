// 1.	Slide the header up when it is clicked on.
$('h1').on('click', function () {
	$('h1').slideUp();
});
// 2.	Remove the purplebox class
$('#box14').removeClass('purplebox');

// Question: Why does $('body') not work in this scenario? That was my first instinct.

// 3.	Hide all of the div’s in #row4
$('#row4 div').hide();

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('.add-para').append('<p>I have been added</p>');

// This worked with or without the <p> and </p> tag for me. What's the preferred method?

// 5.	Add a class in your css and add it to all items with the class .box
$('.box').addClass('fun');

// 6.	Show the footer when the anchor in #box2 is clicked
$('#box2 a').on('click', function () {
	$('footer').show();
});

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3 span').addClass('crazy');

// 8.	Change the background color of all the articles
$('article').css('background-color', 'red');

// 9.	Change the font color of all the articles in row 2
$('#row2 article').css('color', 'white');

// 10.	Select the h4 in #box11 and hide the span inside of #box11 using the .siblings() function
$('#box11 h4').siblings('span').hide();

// 11.	Clicking on #box7 should hide the span within the h2
$('#box7').on('click', function () {
	$('h2 span').hide();
});

// 12.	Add a h3 to the beginning of #box12
$('#box12 p').before('<h3>Happy h3 heading</h3>');

// 13.	SlideUp all the h1s on the page
$('h1').slideUp();

// 14.	Add a unique class to your CSS and add it to the articles in #row1
$('#row1 article').addClass('unique');

// 15.	Clicking reset should fade all boxes, headers and footers in and remove any selected classes
$('#reset').on('click', function () {
	$('.box, h1, h2, h3, h4, h5, h6, footer').fadeIn().removeClass('crazy fun unique');
});

// Hey Matt! I'm not really sure what we are being asked to do in #15. I noticed the directions differ slightly from main.js to instructions.txt. The former says to remove any 'selected' classes; the latter asks us to remove any 'added' classes. I followed the latter because it made more sense to me. Is this correct?