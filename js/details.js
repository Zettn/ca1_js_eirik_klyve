
const url = 'https://api.wheretheiss.at/v1/satellites/25544';

let out = document.getElementById("result");

const queryString = document.location.search;
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the query string
const id = params.get("id"); 
console.log(id);

function listData(list){
    console.log(list.length); 
    document.querySelector("h1").innerHTML += ` (${list.length})`;
  
    out.innerHTML = "";
    for (let item of list) {
      console.log(item);
      out.innerHTML += `
      <li>
      
          <a href="details.html?id=${item.head + item.tail}">
              ${item.name}
          </a>
  
      </li>`;
  
    }
  }

  fetch (url)
  .then(response => response.json())
  .then(data => listData(data.result))
  .catch(error => out.innerHTML = "Something's wrong!");

  function listData(result) {
    console.log(result);
    out.innerHTML = newDiv;
}