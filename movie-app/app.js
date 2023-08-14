$(".movie-form").on('submit', handleForm);

// document.querySelector(".submit").addEventListener('submit', handleForm);

function handleForm(evt) {
  evt.preventDefault();

  const $title = $(".movie-title").val();
  const $rating = $(".movie-rating").val();
  const $button = $("<button>").text("X");

  const $listItem = $("<li>")
    .text( `${$title} ${$rating}`)
    .append($button);

  $(".movie-reviews").append($listItem);
}