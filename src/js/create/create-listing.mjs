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

/auction/listings

{
  "title": "string", // Required
  "description": "string", // Optional
  "tags": ["string"], // Optional
  "media": ["https://url.com/image.jpg"], // Optional
  "endsAt": "2020-01-01T00:00:00.000Z" // Required - Instance of new Date()
}



{
  "id": "string",
  "title": "string",
  "description": "string",
  "tags": ["string"],
  "media": ["https://url.com/image.jpg"],
  "created": "2020-01-01T00:00:00.000Z",
  "updated": "2020-01-01T00:00:00.000Z",
  "endsAt": "2020-01-01T00:00:00.000Z",
  "_count": {
    "bids": 0
  }
}

<template id="postForm">
<form class="row mt-3" id="postForm">
  <div class="col-12 d-flex justify-content-between flex-wrap align-items-center mb-3">
    <h1>Post</h1>
    <button type="submit" class="btn btn-success" data-action="submit">
      <span data-action="publish">Publish</span><span data-action="update">Update</span> Post
    </button>
  </div>