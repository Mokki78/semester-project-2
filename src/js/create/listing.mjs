
const detailContainer = document.querySelector(".card-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const seller = params.get("seller");
console.log(seller);

const url = "http://localhost:10008/wp-json/wp/v2/posts/" + seller;

console.log(url);
async function singleListing() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details);
    
  } catch (error) {
    detailContainer.innerHTML = "";
    console.log(error);
  }
}

singleListing()

function createHtml(details) {
  detailContainer.innerHTML = `<div class=card-content>
             <div class="card-title">${details.title.rendered}</div>
                <div class="card-text">"${details.content.rendered}"</div>`;
}




