
import { API_BASE_URL } from "../api/constants/apiBase.mjs";
import { headers } from "../api/constants/headers.mjs";


export async function fetchListings() {
    try {
      const headersObject = headers();
      const response = await fetch(`${API_BASE_URL}/auction/listings`, { headers: headersObject });
  
      if (response.ok) {
        const listings = await response.json();
  
        const profileContainer = document.getElementById('listingContainer');
        profileContainer.innerHTML = '';
  
        for (const listing of listings) {
          const { title, media } = listing;
  
          let listingElement = document.createElement('div');
          listingElement.innerHTML = `
         <div id="listing-card"> <a href="listing.html?id=${listing.id}"><h1>${listing.title}</h1>
         <img src="${listing.media}" alt="Listing Image">
            <div><p>Description: : ${listing.description}</p></div>
            <div><p>Date ending: ${listing.endsAt}</p></div>
            <div><p>Bids on product: ${listing._count.bids}</p></div></div></a>
          
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
