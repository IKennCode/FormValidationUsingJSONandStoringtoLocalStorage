
//Declare muna ng mga elements na gusto mo i-manipulate

//manipulate the button
const add_review = document.getElementById('add-review-btn');
const display_review = document.getElementById('display-review-btn');

//Manipulate the input elements 
const movie_title = document.getElementById('movie-title');
const year_shown = document.getElementById('year-shown');
const review = document.getElementById('review');
const review_by = document.getElementById('review-by');

//forms
const formReview = document.getElementById('movie-form');

const listMovie = document.querySelector('#display pre');

let reviewList = []


//Your Function Here
function setmovieReviews(event){
    event.preventDefault();

    let formFields = {
        movie_id: Date.now(),
        movie_title: movie_title.value,
        year_shown: year_shown.value,
        review: review.value,
        review_by: review_by.value,
    }

    reviewList.push(formFields);
    console.log(reviewList);
    formReview.reset();

    listMovie.innerHTML = JSON.stringify(reviewList, null, 2);

    localStorage.setItem("movieReviews", JSON.stringify)
    
    
    }


add_review.addEventListener('click', setmovieReviews);
