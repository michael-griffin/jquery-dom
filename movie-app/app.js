
//Why doesn't the jQuery version work?
$(".movie-form").on('submit', handleForm);

$('ul').on('click', 'button', deleteReview);

/* const movieForm = document.querySelector(".movie-form");
movieForm.addEventListener('submit', handleForm); */

function handleForm(evt) {
  evt.preventDefault();

  const $title = $(".movie-title").val();
  const $rating = $(".movie-rating").val();
  const $button = $("<button>").text("X");


/*   const $listItem = $("<li>")
    .text( `${$title} ${$rating} `)
    .append($button); */
  const $listItem = $("<li>")
    .html( `<span class="title-span">${$title}</span>` +
    `<span class="rating-span"> ${$rating}`)
    .append($button);
  $(".movie-reviews").append($listItem);
}


//Ignore this, work in progress
function deleteReview(evt){
  //buttons are currently within li elements, so should be able to get
  //parent from evt.target?

  //hopefully:
  //$(evt.target).parent().remove();
  $(evt.target).parent().remove();
}




$('.alphabet-sort').on('click', handleAlphabetSort);
$('.rating-sort').on('click', handleRatingSort);

function handleAlphabetSort(){
  //Possible ways to sort:
  //select all list elements, get values, re add to dom?

  const $titles = $('.title-span'); //maybe use .toArray();
  const $ratings = $('.rating-span');

  const movieObj = {}

  for (let i = 0; i < $titles.length; i++) {
    movieObj[$titles[i].innerText] = $ratings[i].innerText;
  }

  const sortedTitles = Object.keys(movieObj)
    .map(x => x.toLowerCase())
    .sort();
  console.log('sorted titles is', sortedTitles)

  $('ul').empty();
  const $button = $("<button>").text("X");


/*   const $listItem = $("<li>")
    .text( `${$title} ${$rating} `)
    .append($button); */

for (let title of sortedTitles) {
  const $listItem = $("<li>")
  .html( `<span class="title-span">${title}</span>` +
  `<span class="rating-span"> ${movieObj[title]}`)
  .append($button);
$(".movie-reviews").append($listItem);
}


  //sort $listItems by title
  //transform

  //remove from ul

}

function handleRatingSort(){

}