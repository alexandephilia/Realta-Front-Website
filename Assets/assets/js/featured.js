// Remove the hardcoded featuredArticles array and use the blog data
// The blog data is already available from blog.js through mainBlogPosts and secondPageBlogPosts

// Get all articles including featured articles from blog posts (limited to 3)
// ADD (secondPageBlogPosts) to the array if want to add more!
function getAllArticles() {
  const articles = [...mainBlogPosts,].flatMap(post => [
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
  return shuffleArray(articles).slice(0, 1);
}

// Add standardized date formatting function at the start
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${dayOfWeek} ${dayOfMonth}, ${month} ${year}`;
}

// Function to create a featured card
function createFeaturedCard(article) {
  return `
    <div class="featured-card-wide mb-5">
      <div class="featured-card-container">
        <div class="featured-image-container" style="cursor: pointer;" onclick="window.location.href='article.html?id=${article.id}'">
          <img src="${article.image}" alt="${article.title}" class="featured-image">
          <span class="category-badge">${article.category}</span>
        </div>
        <div class="featured-content">
          <div class="featured-header">
            <h3 class="featured-title" onclick="window.location.href='article.html?id=${article.id}'">${article.title}</h3>
            <small class="featured-date">${formatDate(article.date)}</small>
          </div>
          <p class="featured-description">${article.lead ? article.lead.split('<br>')[0] : ''}</p>
          <div class="featured-footer">
            <a href="article.html?id=${article.id}" class="blog-btn">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="text">Read More</span>
              <svg class="arr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"/>
              </svg>
              <svg class="arr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Update the updateArticles function to remove shimmer
function updateArticles(articles) {
  const featuredArticlesContainer = document.getElementById('featured-articles-container');
  
  if (articles.length > 0) {
    const firstArticle = articles[0];
    featuredArticlesContainer.innerHTML = createFeaturedCard(firstArticle);
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
            <small class="text-muted mobile-date">${formatDate(article.date)}</small>
          </div>
          <p class="blog-lead mb-4">
            ${article.lead ? article.lead.split('<br>')[0] : ''}
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
  
  const allArticles = getAllArticles();
  updateArticles(allArticles);

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

// Add these styles to the existing categoryStyle
categoryStyle.textContent += `
  .featured-card-wide {
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .featured-card-container {
    display: flex;
    height: auto;
  }

  .featured-image-container {
    flex: 0 0 45%;
    position: relative;
    overflow: hidden;
    height: 350px;
  }

  .featured-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .featured-card-wide:hover .featured-image {
    transform: scale(1.05);
  }

  .category-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgba(114, 9, 212, 0.85);
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 0.9rem;
    backdrop-filter: blur(5px);
    z-index: 2;
  }

  .featured-content {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .featured-header {
    margin-bottom: 1rem;
  }

  .featured-title {
    font-size: 33px !important;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
    color: #333;
  }

  .featured-date {
    color: #666;
    font-size: 0.9rem;
  }

  .featured-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333333;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Add additional browser support */
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .featured-footer {
    padding-top: 0;
  }

  /* Dark mode styles */
  body.dark-mode .featured-card-wide {
    background: #2d2d2d;
  }

  body.dark-mode .featured-title {
    color: #fff;
  }

  body.dark-mode .featured-description {
    color: #ccc;
  }

  body.dark-mode .featured-date {
    color: #aaa;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .featured-card-container {
      flex-direction: column;
      min-height: auto;
    }

    .featured-image-container {
      height: 250px;
    }

    .featured-content {
      padding: 1.5rem;
    }

    .featured-title {
      font-size: 1.5rem;
    }

    .featured-description {
      font-size: 1rem;
    }
  }

  .blog-lead {
    font-size: 16px;
    line-height: 1.6;
    color: #333333;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Add additional browser support */
    display: -moz-box;
    -moz-box-orient: vertical;
  }

  /* Dark mode adjustment */
  body.dark-mode .blog-lead {
    color: #ccc;
  }
`;