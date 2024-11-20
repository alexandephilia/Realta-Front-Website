// Remove the hardcoded featuredArticles array and use the blog data
// The blog data is already available from blog.js through mainBlogPosts and secondPageBlogPosts

// Get all articles including featured articles from blog posts (limited to 3)
function getAllArticles() {
  const articles = [...mainBlogPosts, ...secondPageBlogPosts].flatMap(post => [
    post,
    ...(post.featuredArticles || [])
  ]);
  
  // Shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // Return 3 random articles
  return shuffleArray(articles).slice(0, 3);
}

// Function to create a featured card
function createFeaturedCard(article) {
  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card featured-card h-100 custom-blog-card">
        <div class="image-container position-relative">
          <img src="${article.image}" alt="${article.title}" class="img-fluid featured-image">
          <span class="badge bg-primary category-badge position-absolute">${article.category}</span>
        </div>
        <div class="card-body d-flex flex-column">
          <h3 class="card-title mobile-title">${article.title}</h3>
          <p class="card-text flex-grow-1 mobile-description">${article.lead ? article.lead.split('<br>')[0].substring(0, 150) + '...' : ''}</p>
        </div>
        <hr class="my-2 mx-auto" style="width: 90%;">
        <div class="card-footer d-flex justify-content-between align-items-center">
          <small class="text-muted">${article.date}</small>
          <a href="article.html?id=${article.id}" class="custom-blog-card__read-more">Read more</a>
        </div>
      </div>
    </div>
  `;
}

// Add new function to create shimmer template
function createShimmerTemplate() {
  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card featured-card h-100 custom-blog-card">
        <div class="shimmer-card">
          <div class="shimmer shimmer-image"></div>
          <div class="card-body">
            <div class="shimmer shimmer-title"></div>
            <div class="shimmer shimmer-text"></div>
            <div class="shimmer shimmer-text"></div>
          </div>
          <div class="card-footer">
            <div class="shimmer shimmer-badge"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Updated updateArticles function
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
  const allArticles = getAllArticles();
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.lead?.toLowerCase().includes(query.toLowerCase()) ||
    article.category.toLowerCase().includes(query.toLowerCase())
  );
}

// Function to display search results
function displaySearchResults(articles) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';
  
  if (articles.length === 0) {
    searchResults.innerHTML = '<li class="list-group-item text-center py-3">No results found</li>';
  } else {
    const resultList = document.createElement('ul');
    resultList.className = 'list-group search-results-list';
    
    articles.forEach(article => {
      const li = document.createElement('li');
      li.className = 'list-group-item list-group-item-action d-flex flex-column flex-sm-row justify-content-between align-items-start p-3';
      li.innerHTML = `
        <div class="ms-2 me-auto w-100">
          <div class="fw-bold mb-1">${article.title}</div>
          <div class="d-flex flex-wrap align-items-center mb-2">
            <small class="text-muted me-3">${article.category}</small>
            <small class="text-muted mobile-date">${article.date}</small>
          </div>
          <p class="mb-0 text-truncate mobile-description">
            ${article.lead ? article.lead.split('<br>')[0].substring(0, 150) + '...' : ''}
          </p>
        </div>
      `;
      li.addEventListener('click', () => {
        window.location.href = `article.html?id=${article.id}`;
      });
      resultList.appendChild(li);
    });
    
    searchResults.appendChild(resultList);
  }
  
  searchResults.style.display = 'block';
}

// Main execution when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const featuredArticlesContainer = document.getElementById('featured-articles-container');
  
  // Show shimmer loading state
  featuredArticlesContainer.innerHTML = `
    <div class="row">
      ${createShimmerTemplate()}
      ${createShimmerTemplate()}
      ${createShimmerTemplate()}
    </div>
  `;

  // Simulate loading delay (remove this in production if not needed)
  setTimeout(() => {
    const allArticles = getAllArticles();
    updateArticles(allArticles);
  }, 1000);

  // Set up search functionality
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');

  function performSearch() {
    const query = searchInput.value.trim();
    const filteredArticles = filterArticles(query);
    updateArticles(filteredArticles);
    searchResults.style.display = 'none';
  }

  searchButton?.addEventListener('click', performSearch);
  searchInput?.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  // Event listener for the search input
  searchInput?.addEventListener('input', function() {
    const query = this.value.trim();
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
    if (searchContainer && !searchContainer.contains(event.target)) {
      searchResults.style.display = 'none';
    }
  });
});