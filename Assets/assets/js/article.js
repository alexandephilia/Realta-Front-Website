console.log('Article.js loaded');

// Import the blog post arrays
const allBlogPosts = [...mainBlogPosts, ...secondPageBlogPosts];

function getArticleIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

function findArticleById(id) {
  const numericId = parseInt(id);
  console.log('Searching for article with id:', numericId);
  
  // First check all main blog posts
  for (const post of allBlogPosts) {
    // Check if this is the main article
    if (post.id === numericId) {
      return post;
    }
    
    // Check featured articles if they exist
    if (post.featuredArticles) {
      const featuredArticle = post.featuredArticles.find(fa => fa.id === numericId);
      if (featuredArticle) {
        // Add any missing properties from the parent post if needed
        return {
          ...featuredArticle,
          category: featuredArticle.category || post.category,
          imageAlt: featuredArticle.imageAlt || post.imageAlt
        };
      }
    }
  }
  
  return null;
}

function renderFullArticle(post) {
  console.log('Rendering article:', post);
  const articleContainer = document.getElementById('article-container');
  if (!articleContainer) {
    console.error('Article container not found');
    return;
  }
  
  articleContainer.innerHTML = `
    <article class="pb-5 blog-article">
      <h2 class="display-5 link-body-emphasis mb-3">
        <span class="blog-post-title">${post.title}</span>
      </h2>
      <div class="blog-image-container position-relative overflow-hidden mb-4">
        <img src="${post.image}" alt="${post.title}" class="blog-image">
      </div>
      <p class="blog-meta mb-3">${post.date} in <span class="blog-category">${post.category}</span></p>
      <p class="blog-lead mb-4">${post.lead || post.text}</p>
      ${post.content ? `<div class="blog-content mb-4">${post.content}</div>` : ''}
      
      ${post.features ? `
        <h3 class="mt-4 mb-3">Key Features</h3>
        <ul class="list-unstyled">
          ${post.features.map(feature => `
            <li class="blog-list-item">
              <i class="bi bi-check-circle-fill text-success me-2"></i>${feature}
            </li>
          `).join('')}
        </ul>
      ` : ''}
      
      ${post.challenges ? `
        <h3 class="mt-4 mb-3">Key Challenges</h3>
        <ul class="list-unstyled">
          ${post.challenges.map(challenge => `
            <li class="blog-list-item">
              <i class="bi bi-exclamation-circle-fill text-warning me-2"></i>${challenge}
            </li>
          `).join('')}
        </ul>
      ` : ''}
      
      ${post.imageAlt ? `
        <div class="additional-image-container d-flex justify-content-center mb-4 py-4">
          <img src="${post.imageAlt}" alt="Additional image" class="img-fluid w-80">
        </div>
      ` : ''}
      
      ${post.additionalParagraph ? `
        <h3 class="mt-4 mb-3">Additional Information</h3>
        <p class="mb-4">${post.additionalParagraph}</p>
      ` : ''}
      
      ${post.conclusion ? `
        <h3 class="mt-4 mb-3">Conclusion</h3>
        <p>${post.conclusion}</p>
      ` : ''}
    </article>
  `;
}

// Main execution when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const articleId = getArticleIdFromUrl();
  if (!articleId) {
    console.error('No article ID found in URL');
    return;
  }

  const article = findArticleById(articleId);
  if (article) {
    renderFullArticle(article);
  } else {
    const articleContainer = document.getElementById('article-container');
    // Get 3 random articles as suggestions
    const suggestedArticles = allBlogPosts
      .flatMap(post => [post, ...(post.featuredArticles || [])])
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    articleContainer.innerHTML = `
      <style>
        .suggested-card {
          height: 100%;
          transition: transform 0.2s;
          border-radius: 10px;
          overflow: hidden;
        }
        .suggested-card:hover {
          transform: translateY(-5px);
        }
        .suggested-card .card-img-top {
          height: 200px;
          object-fit: cover;
        }
        .suggested-card .card-body {
          height: 250px;
          display: flex;
          flex-direction: column;
        }
        .suggested-card .card-title {
          font-size: 1.1rem;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .suggested-card .card-text {
          flex-grow: 1;
          font-size: 0.9rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .category-badge {
          background-color: #6f42c1 !important;
          color: white;
          font-size: 0.8rem;
          padding: 0.4rem 0.8rem;
        }
        .btn-custom-purple {
          background-color: #7209d4;
          border-color: #7209d4;
          color: white;
          border-radius: 10px;
          padding: 0.5rem 1.5rem;
          transition: all 0.3s ease;
        }
        .btn-custom-purple:hover {
          background-color: #5f07af;
          border-color: #5f07af;
          color: white;
        }
        .btn-outline-custom-purple {
          color: #7209d4;
          border-color: #7209d4;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .btn-outline-custom-purple:hover {
          background-color: #7209d4;
          color: white;
        }
      </style>
      <div class="article-not-found text-center py-5">
        <div class="mb-5">
          <svg class="text-muted mb-4" style="width: 64px; height: 64px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 class="display-6 mb-3">Article Not Found</h2>
          <p class="lead text-muted">Sorry, we couldn't find the article you're looking for.</p>
          
        </div>
        
        <div class="suggested-articles mt-5">
          <h3 class="h4 mb-4">You might be interested in:</h3>
          <div class="row g-4">
            ${suggestedArticles.map(article => `
              <div class="col-md-4">
                <div class="card suggested-card shadow-sm">
                  <img src="${article.image}" class="card-img-top" alt="${article.title}">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="badge category-badge">${article.category}</span>
                      <small class="text-muted">${article.date.split(',')[0]}</small>
                    </div>
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.lead}</p>
                    <a href="article.html?id=${article.id}" class="btn btn-outline-custom-purple btn-sm mt-auto">Read Article</a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
});

