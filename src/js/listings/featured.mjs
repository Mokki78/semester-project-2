
import { API_BASE_URL } from "../api/constants/apiBase.mjs";
import { headers } from "../api/constants/headers.mjs";


async function fetchListings() {
    try {
      const headersObject = headers();
      const response = await fetch(`${API_BASE_URL}/auction/listing`, { headers: headersObject });
  
      if (response.ok) {
        const listings = await response.json();
  
        const profileContainer = document.getElementById('listingContainer');
        profileContainer.innerHTML = '';
  
        for (const listing of listings) {
          const { title, media } = listing;
  
          const listingElement = document.createElement('div');
          listingElement.innerHTML = `
            <h1>${listing.title}</h1>
             <img src="${listing.media}" alt="Listing Image">
            <div><p>Description: : ${listing.description}</p></div>
            <div><p>Date created: ${listing.created}</p></div>
            <div><p>Date updated: ${listing.updated}</p></div>
            <div><p>Date ending: ${listing.endsAt}</p></div>
            <div><p>Bids on product: ${listing._count.bids}</p></div>
           
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
