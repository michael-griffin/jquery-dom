/*
    1.Give all images inside of an article tag the class of image-center
    (this class is defined inside of the style tag in the head).
    2.Remove the last paragraph in the article.
    3.Set the font size of the title to be a random pixel size from 0 to 100.
    4. Add an item to the list; it can say whatever you want.
    5. Scratch that; the list is silly. Empty the aside and put a paragraph in it
    apologizing for the list’s existence.
    6. When you change the numbers in the three inputs on the bottom,
    the background color of the body should change to match whatever the three
     values in the inputs are. HINT - The change event is triggered when the
     value of an input changes.
    7. Add an event listener so that when you click on the image, it is removed from the DOM.
 */

//import $ from "jquery";


//1.
$('article img').addClass('image-center');
//2.
$('article p:last-of-type').remove();

//3.
let randSize = Math.round(Math.random()*100);
$('#title').css('fontSize', randSize);

//4. Could make a new element in jQuery here rather than chaining.
$('ol').append('<li>Another incredible item in this list</li>');

//$list = $('<li>').text('another incredible...');
//append now

//5.
$('aside').empty().append("<p>I'm so sorry for the existence of lists");


//6.//TODO: not using jQuery, is there a better option?

//Aim to be specific, use a specific CSS selector .mb-5 input[type]
//almost never modifying a jQuery object, consider using const over let (for $colors)
$('.mb-5').on('change', changeColor);
function changeColor() {
  //loop through input elements, check value for each
  //let colors = [100, 100, 255];


  let $colors = $('input[type="number"]');
  console.log($colors);

  let colors = [];
  for (let color of $colors){
    colors.push(color.value);
  }
  console.log('colors array is: ', colors);
  //set style with .css to be [color1, color2, color3]
  //jQuery object isn't an array by default, so would convert to Array.from($colors);
  //const [red, green, blue] = colors.map(color => color.value);
  $('body').css({backgroundColor: `rgb( ${colors[0]}, ${colors[1]}, ${colors[2]})` })
}


//7.
function deleteImg(evt){
  //possible jQuery way?
  evt.target.remove();

  //if you pass a vanilla DOM to a $( ), it will return a jQuery obj
  //$(evt.target).remove();
}

$('img').on('click', deleteImg);
