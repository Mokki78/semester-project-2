
document.getElementById("search-content").addEventListener("click", search);

function search() {
    var searchTerm = document.getElementById('search-input').value;
    fetch('https://api.noroff.dev/api/v1/auction/listings?search=' + searchTerm)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Handle search results
        const results = data.data;
        const resultsContainer = document.getElementById('search-content');
        resultsContainer.innerHTML = '';
        for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const  resultElement = document.createElement('div');
          resultElement.innerHTML = `<div class="auction-card"><h4>${result.title}</h4><p>${result.description}</p><img>${result.media}</img></div>`;
          resultsContainer.appendChild(resultElement);
        }
      })
      .catch(function(error) {
        console.error('Error fetching search results:', error);
      });
  }