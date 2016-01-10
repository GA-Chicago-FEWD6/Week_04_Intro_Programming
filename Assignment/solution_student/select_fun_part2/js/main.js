// 1.	Slide the header up when it is clicked on.

$('header').on('click', function() {
	$('header').slideUp(400)
});
// 2.	Remove the purplebox class
$('#box14').removeClass('purplebox');

// 3.	Hide all of the div’s in #row4
$('#row4 div').hide();

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('.add-para').append('I have been added');

// 5.	Add a class in your css and add it to all items with the class .box
$('.box').addClass('new');

// 6.	Show the footer when the anchor in #box2 is clicked
$('#box2 a').on('click', function() {
	$('footer').show(300);
});

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3 span').addClass('spanUpdate');

// 8.	Change the background color of all the articles
$('article').css('background', '#ffb6c1');

// 9.	Change the font color of all the articles in row 2
$('#row2 article').css('color', '#89cff0');

// 10.	Select the h4 in #box11 and hide the span inside of #box11 using the .siblings() function
$('#box11 h4').siblings('span').hide();
//did i do this correctly? i feel like i still see it, but am racking my brain on what is going on.

// 11.	Clicking on #box7 should hide the span within the h2
$('#box7').on('click', function () {
	$('h2 span').hide();
});

// 12.	Add a h3 to the beginning of #box12
$('#box12 p').before('Happy h3 Heading');
//i tried this a couple of ways before deciding on this, but my question is how can i get the styling of the H3? do i need to add that in here?

// 13.	SlideUp all the h1s on the page
//when i do step #13 i lose all of my JS throughout the page... obvi there is something wrong here. what gives? 

// 14.	Add a unique class to your CSS and add it to the articles in #row1
$('#row1 article').addClass('rowArticleUpdate');

// 15.	Clicking reset should fade all boxes, headers and footers in and remove any selected classes
$('#reset').on('click', function () {
	$('.box').hide().fadeIn(3000);
});
//i'm not sure how to remove any selected classes? in fact... i'm not entirely sure what that even means