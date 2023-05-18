
const listings = [
  { image: 'image1.jpg', title: 'Listing 1', description: 'Description 1' },
  { image: 'image2.jpg', title: 'Listing 2', description: 'Description 2' },
  // ...
];

// Generate the links for each listing
listings.forEach((listing) => {
  const link = document.createElement('a');
  link.href = `listing.html?image=${encodeURIComponent(listing.image)}&title=${encodeURIComponent(listing.title)}&description=${encodeURIComponent(listing.description)}`;
  link.textContent = listing.title;

  // Append the link to the container element
  const container = document.getElementById('listings-container');
  container.appendChild(link);
});