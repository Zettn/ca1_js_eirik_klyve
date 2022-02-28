
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude, altitude, velocity} = data;

    document.getElementById('lat').textContent =latitude;
    document.getElementById('lon').textContent =longitude;
    document.getElementById('alt').textContent =altitude;
    document.getElementById('vel').textContent =velocity;
}
getISS();


const out = document.getElementById("result");
function listData(list){
    console.log(list.length); 
    document.querySelector("h1").innerHTML += ` (${list.length})`;
  
    out.innerHTML = "";
    for (let item of list) {
      console.log(item);
      out.innerHTML += `
      <li>
      
          <a href="amiibo-detail.html?id=${item.head + item.tail}">
              ${item.name}
          </a>
  
      </li>`;
  
    }
  }