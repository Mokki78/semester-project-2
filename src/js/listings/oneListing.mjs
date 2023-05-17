import { API_BASE_URL } from "../api/constants/apiBase.mjs";
import { headers } from "../api/constants/headers.mjs";

const detailContainer = document.querySelector("#oneListing");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

async function singleListing() {
  try {
    const response = await fetch(`${API_BASE_URL}/auction/listings/${id}`, {
        headers: headers(),
      });

    detailContainer.innerHTML = "";

    if (response.ok) {
      const data = await response.json();
      createHtml(data);
    }
  } catch (error) {
    console.log(error);
  }
}

singleListing();

function createHtml(data) {
  detailContainer.innerHTML = `<div class="auction-card">
    <div class="auction-title">${data.title}</div>
    <img src="${data.media}" alt="Listing Image">
    <div class="auction-description">${data.description}</div> 
    <div><p>Date ending: ${data.endsAt}</p></div>    
    <div><p>Bids on product: ${data._count.bids}</p></div>
  </div>`;
}



