import { API_BASE_URL } from "../api/constants/apiBase.mjs";
import { headers } from "../api/constants/headers.mjs";

async function fetchSearchContent() {
  try {
    const headersObject = headers();
    const response = await fetch(`${API_BASE_URL}/auction/listings/?title`, { headers: headersObject });

    if (response.ok) {
      const listings = await response.json();

      const searchButton = document.querySelector(".searchBtn");
      searchButton.addEventListener("click", () => {
        const searchInput = document.querySelector('.search-options').value.toLowerCase();

        const filteredListings = listings.filter(listing => {
          const { title } = listing;
          return title.toLowerCase().includes(searchInput);
        });

        const searchContainer = document.querySelector(".search-content");
        searchContainer.innerHTML = '';
       


        if (filteredListings.length === 0) {
          searchContainer.innerHTML = 'No matching auction found.';
          alert("No auction matching your search");
         
      
          } else {
          filteredListings.forEach(listing => {
            const { title, media } = listing;

            const listingElement = document.createElement('div');
            listingElement.innerHTML = `
              <div class="auction-card"><a href="listing.html?id=${listing.id}">
              <div class="auction-image"><img src="${listing.media}" alt="Listing Image"></div>
             <div class="auction-text"><div class="auction-title"><h1>${listing.title}</h1></div>
              <div class="auction-bids"><h3>Number of bids so far: ${listing._count.bids}</h3></div></a></div>
            `;

            searchContainer.appendChild(listingElement);
         
          });
        }
      });
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchSearchContent();
});

