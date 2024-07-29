// Define the featured articles data
const featuredArticles = [
    {
      category: "Tech",
      title: "OpenAI's 5 Steps to AGI",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jul 12, 2023 15:30",
      author: "John Doe",
      image: "assets/blog/agi.jpg"
    },
    {
      category: "Tech",
      title: "The World's Smallest Android Phone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jul 13, 2023 09:45",
      author: "Jane Smith",
      image: "assets/blog/small.jpg"
    },
    {
      category: "LifeStyle",
      title: "Apple Intelligence Coming This Fall",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jul 14, 2023 14:20",
      author: "Alex Johnson",
      image: "assets/img/news/news1.jpg"
    },
    {
      category: "Vision",
      title: "Meta Believe in AI Open Source",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jul 15, 2023 11:10",
      author: "Emily Green",
      image: "assets/img/news/news0.png"
    },
    {
      category: "Tech",
      title: "Mistral Nemo AI is Here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jul 16, 2023 08:55",
      author: "Dr. Sarah Lee",
      image: "assets/img/news/news11.png"
    },
    {
      category: "Tech",
      title: "Meta Release 405B Model",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jul 17, 2023 16:40",
      author: "Mark Stevens",
      image: "assets/img/news/new7.png"
    }
  ];
  
// Function to create a featured card
function createFeaturedCard(article) {
    return `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card featured-card h-100">
          <div class="image-container">
            <img src="${article.image}" alt="${article.title}" class="img-fluid featured-image">
            <span class="badge bg-primary category-badge">${article.category}</span>
          </div>
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">${article.title}</h3>
            <p class="card-text flex-grow-1">${article.description}</p>
          </div>
          <hr class="my-3 mx-auto" style="width: 80%; border-top: 1px solid rgba(0,0,0,.6);">
          <div class="card-footer">
            <small class="text-muted">${article.date} | ${article.author}</small>
            <a href="#" class="read-more">Read more <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    `;
}

// Updated updateArticles function (keep only this one)
function updateArticles(articles) {
    const featuredArticlesContainer = document.getElementById('featured-articles-container');
    
    if (articles.length > 0) {
      const articleCards = articles.map(createFeaturedCard).join('');
      
      featuredArticlesContainer.innerHTML = `
        <div class="row">
          ${articleCards}
        </div>
      `;
    } else {
      featuredArticlesContainer.innerHTML = '<p class="text-center">No featured articles found.</p>';
    }
}
  
// Function to filter articles based on search query
function filterArticles(query) {
    return featuredArticles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase()) ||
      article.author.toLowerCase().includes(query.toLowerCase())
    );
  }
  
// Function to display search results
function displaySearchResults(articles) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    
    if (articles.length === 0) {
      searchResults.innerHTML = '<li class="list-group-item">No results found</li>';
    } else {
      const resultList = document.createElement('ul');
      resultList.className = 'list-group';
      
      articles.forEach(article => {
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-start';
        li.innerHTML = `
          <div class="ms-2 me-auto">
            <div class="fw-bold">${article.title}</div>
            <small class="text-muted">${article.category} | ${article.author}</small>
            <p class="mb-1 text-truncate" style="max-width: 300px;">${article.description}</p>
          </div>
        <span class="badge rounded-pill" style="background-color: #7209d4;">${new Date(article.date).toLocaleDateString()}</span>
        `;
        li.addEventListener('click', () => {
          console.log('Clicked article:', article.title);
          updateArticles([article]);
          document.getElementById('search-input').value = '';
          searchResults.innerHTML = '';
        });
        resultList.appendChild(li);
      });
      
      searchResults.appendChild(resultList);
    }
    
    // Show the search results dropdown
    searchResults.style.display = 'block';
  }
  
// Populate the featured articles and set up search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initial population of articles
    updateArticles(featuredArticles);
  
    // Set up search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
  
    function performSearch() {
      const query = searchInput.value.trim();
      const filteredArticles = filterArticles(query);
      updateArticles(filteredArticles);
    }
  
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  
    // Event listener for the search input
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      const searchResults = document.getElementById('search-results');
      if (query.length > 0) {
        const filteredArticles = filterArticles(query);
        displaySearchResults(filteredArticles);
      } else {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
      }
    });
  
    // Close search results when clicking outside
    document.addEventListener('click', function(event) {
      const searchContainer = document.querySelector('.search-container');
      const searchResults = document.getElementById('search-results');
      if (!searchContainer.contains(event.target)) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
      }
    });
  });


  
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
  
    searchInput.addEventListener('input', function() {
      if (this.value.length > 0) {
        // Show dropdown and populate with results
        searchResults.style.display = 'block';
        // Here you would typically call a function to populate the results
        // For example: populateSearchResults(this.value);
      } else {
        // Hide dropdown when input is empty
        searchResults.style.display = 'none';
      }
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
      }
    });
  });
  
  // Function to populate search results (you'll need to implement this)
  function populateSearchResults(query) {
    // Fetch results based on the query
    // Update the content of searchResults
    // For example:
    // searchResults.innerHTML = '<div class="list-group-item">Result 1</div><div class="list-group-item">Result 2</div>';
  }