
//Declare muna ng mga elements na gusto mo i-manipulate

//manipulate the button
const add_review = document.getElementById('add-review-btn');
const display_review = document.getElementById('display-review-btn');
const clearButton = document.getElementById("clear-btn");

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

    localStorage.setItem("ReviewList", JSON.stringify(reviewList));
    formReview.reset();

}


    // get Data from the Local Storage
    display_review.addEventListener("click", getmovieReviews);
    
    // function getmovieReviews(event){
    //     event.preventDefault();

    
    //     let newArr = JSON.parse(localStorage.getItem("ReviewList"));
    //     console.table(newArr);

    //     listMovie.innerHTML = JSON.stringify(newArr, null, 2);

   
    // }

    function getmovieReviews(event) {
        event.preventDefault();
      
        let newArr = JSON.parse(localStorage.getItem("ReviewList"));
        console.table(newArr);
      
        // Clear the existing table rows
        while (listMovie.firstChild) {
          listMovie.firstChild.remove();
        }
      
        // Create table headers
        const tableHeaders = ["Movie ID", "Movie Title", "Year Shown", "Review", "Review By"];
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
      
        tableHeaders.forEach((header) => {
          const th = document.createElement("th");
          th.textContent = header;
          tr.appendChild(th);
        });
      
        thead.appendChild(tr);
        table.appendChild(thead);
      
        // Create table rows for each review
        const tbody = document.createElement("tbody");
      
        newArr.forEach((review) => {
          const row = document.createElement("tr");
      
          for (const key in review) {
            const cell = document.createElement("td");
            cell.textContent = review[key];
            row.appendChild(cell);
          }
      
          tbody.appendChild(row);
        });
      
        table.appendChild(tbody);
        listMovie.appendChild(table);
      }
      


add_review.addEventListener('click', setmovieReviews);



// Add a click event listener to the clear button
clearButton.addEventListener("click", function() {
    // Clear the input fields
    document.getElementById("movie-title").value = "";
    document.getElementById("year-shown").value = "";
    document.getElementById("review").value = "";
    document.getElementById("review-by").value = "";
});

