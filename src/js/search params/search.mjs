 import { API_BASE_URL} from "../api/constants/apiBase.mjs";
 import { headers } from "../api/constants/headers.mjs";


async function fetchSearchContent() {
  try {
    const headersObject = headers();
    const response = await fetch(`${API_BASE_URL}/auction/listings`, { headers: headersObject });

    if (response.ok) {
      const listings = await response.json();

      const searchInput = document.querySelector('.search-options').value.toLowerCase();

      const filteredListings = listings.filter(listing => {
        const { title, description } = listing;
        return title.toLowerCase().includes(searchInput) || description.toLowerCase().includes(searchInput);
      });

      const searchContainer = document.querySelector("#search-content");
      searchContainer.innerHTML = '';

      if (filteredListings.length === 0) {
        profileContainer.innerHTML = 'No matching auction found.';
      } else {
        filteredListings.forEach(listing => {
          const { title, media } = listing;

          const listingElement = document.createElement('div');
          listingElement.innerHTML = `
            <h1>${title}</h1>
            <img src="${media}" alt="Listing Image">
          `;

          searchContainer.appendChild(listingElement);
        });
      }
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }


document.addEventListener('DOMContentLoaded', () => {
  fetchSearchContent() ;
});

}