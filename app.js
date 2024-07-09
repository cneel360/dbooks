
var searchTerm = ''
function selector() {
  var age = prompt("age: ");
  var genre = prompt("genre: ");
  var searchTerm = genre + " books for " + age + " years old";

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then(response => response.json())
    .then(handleResponse)
    .catch(error => console.error(error));
}