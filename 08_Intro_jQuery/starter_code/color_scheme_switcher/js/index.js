$('#grayButton').on('click', switchGray),
$('#whiteButton').on('click', switchWhite),

function switchGray() {
  $('body').toggleClass('gray-scheme');
}

function switchWhite() {
  // document.body.style.backgroundColor = 'white';
  // document.body.style.color = 'black';
  $('body').css('background-color', 'white');
  $('body').css('color', 'black');
}
