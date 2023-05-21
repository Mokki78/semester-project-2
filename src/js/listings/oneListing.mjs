import { API_BASE_URL } from '../api/constants/apiBase.mjs';
import { headers } from '../api/constants/headers.mjs';

const detailContainer = document.querySelector('#oneListing');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

async function singleListing() {
  try {
    const response = await fetch(`${API_BASE_URL}/auction/listings/${id}`, {
      headers: headers(),
    });

    detailContainer.innerHTML = '';

    if (response.ok) {
      const data = await response.json();
      createHtml(data);
    }
  } catch (error) {
    console.log(error);
  }
}

singleListing();

async function getSellerInformation(sellerId) {
  try {
    const response = await fetch(`${API_BASE_URL}/seller/${sellerId}`, {
      headers: headers(),
    });

    if (response.ok) {
      const sellerData = await response.json();
      return sellerData;
    } else {
      throw new Error('Failed to fetch seller information');
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getBidInformation(listingId) {
  try {
    const response = await fetch(`${API_BASE_URL}/listings/${listingId}/bids`, {
      headers: headers(),
    });

    if (response.ok) {
      const bidData = await response.json();
      return bidData;
    } else {
      throw new Error('Failed to fetch bid information');
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function createHtml(data) {
  const sellerData = await getSellerInformation(data.sellerId);
  const bidData = await getBidInformation(data.id);

  const sellerName = sellerData ? sellerData.name : 'N/A';
  const bidCount = bidData ? bidData.length : 0;

  detailContainer.innerHTML = `
    <div class="auction-card">
      <div class="auction-title">${data.title}</div>
      <img src="${data.media}" class="auction-media" alt="Listing Image">
      <div class="auction-description">Description: ${data.description}</div>
      <div><p>Bids on product: ${bidCount}</p></div>
      <div><p>Date ending: ${data.endsAt}</p></div>
      <div><p>Seller: ${sellerName}</p></div>
    </div>
  `;
}
