import { API_BASE_URL } from '../api/constants/apiBase.mjs';
import { headers } from '../api/constants/headers.mjs';

export async function fetchListings() {
  try {
    const headersObject = headers();
    const response = await fetch(`${API_BASE_URL}/auction/listings`, {
      headers: headersObject,
    });

    if (response.ok) {
      const listings = await response.json();

      const profileContainer = document.getElementById('listingContainer');
      profileContainer.innerHTML = '';

      for (const listing of listings) {
        const { title, media } = listing;

        let listingElement = document.createElement('div');
        listingElement.innerHTML = `
         <div class="auction-card"> <a href="listing.html?id=${listing.id}">
         <img src="${listing.media}" class="auction-image" alt="Listing Image">
         <h1 class="auction-title">${listing.title}</h1>
        <div><h3>Bids on product: ${listing._count.bids}</h3></div></a></div>
        </div>
          `;

        profileContainer.appendChild(listingElement);
      }
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchListings();
});
