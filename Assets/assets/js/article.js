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

function getArticleMetadata() {
  const article = findArticleById(getArticleIdFromUrl());
  if (!article) return null;
  
  return {
    title: article.title,
    description: article.lead?.split('<br>')[0] || '',
    url: window.location.href,
    image: article.image
  };
}

// Social sharing functions
function shareOnTwitter() {
  const metadata = getArticleMetadata();
  if (!metadata) return;
  
  const text = `${metadata.title}\n\n${metadata.description.substring(0, 100)}...`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(metadata.url)}`;
  window.open(shareUrl, '_blank', 'width=550,height=420');
}

function shareOnWhatsApp() {
  const metadata = getArticleMetadata();
  if (!metadata) return;
  
  const text = `${metadata.title}\n\n${metadata.description.substring(0, 100)}...\n\n`;
  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + metadata.url)}`;
  window.open(shareUrl, '_blank');
}

function shareOnFacebook() {
  const metadata = getArticleMetadata();
  if (!metadata) return;
  
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(metadata.url)}`;
  window.open(shareUrl, '_blank', 'width=550,height=420');
}

function copyArticleLink(event) {
  // Prevent the default anchor behavior
  if (event) event.preventDefault();
  
  // Create a temporary input element
  const tempInput = document.createElement('textarea');
  tempInput.value = window.location.href;
  
  // Make it invisible but keep it in the viewport (important for iOS)
  tempInput.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
  `;
  
  document.body.appendChild(tempInput);
  
  try {
    // Select the text
    tempInput.focus();
    tempInput.select();
    
    // For iOS devices
    tempInput.setSelectionRange(0, 99999);
    
    // Try the new API first
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(tempInput.value)
        .then(() => showCopySuccess())
        .catch(() => fallbackCopy(tempInput));
    } else {
      fallbackCopy(tempInput);
    }
  } catch (err) {
    console.error('Copy failed:', err);
    alert('Failed to copy link. Please try again.');
  } finally {
    // Clean up
    document.body.removeChild(tempInput);
  }
}

function fallbackCopy(element) {
  try {
    // Execute copy command
    const successful = document.execCommand('copy');
    if (successful) {
      showCopySuccess();
    } else {
      throw new Error('Copy command failed');
    }
  } catch (err) {
    console.error('Fallback copy failed:', err);
    alert('Failed to copy link. Please try again.');
  }
}

function showCopySuccess() {
  const copyIcon = document.querySelector('.social-icon.copy svg');
  if (copyIcon) {
    const originalSvg = copyIcon.innerHTML;
    copyIcon.innerHTML = `<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>`;
    setTimeout(() => copyIcon.innerHTML = originalSvg, 2000);
  }
}

function renderFullArticle(post) {
  console.log('Rendering article:', post);
  const articleContainer = document.getElementById('article-container');
  if (!articleContainer) {
    console.error('Article container not found');
    return;
  }
  
  const socialShareHTML = `
    <div class="social-share-container mb-4 shimmer-wrapper">
      <div class="d-flex flex-column align-items-start gap-3">
        <h5 class="share-title mb-0">Share this article</h5>
        <div class="social-share-icons shimmer">
          <a href="#" onclick="shareOnTwitter(); return false;" class="social-icon x-twitter" aria-label="Share on X (Twitter)">
            <span class="tooltip">Twitter</span>
            <svg class="x-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" onclick="shareOnWhatsApp(); return false;" class="social-icon whatsapp" aria-label="Share on WhatsApp">
            <span class="tooltip">WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a href="#" onclick="shareOnFacebook(); return false;" class="social-icon facebook" aria-label="Share on Facebook">
            <span class="tooltip">Facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" onclick="copyArticleLink(); return false;" class="social-icon copy" aria-label="Copy link">
            <span class="tooltip">Copy Link</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;

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
      
   
      
      ${post.additionalParagraph ? `
        <h3 class="mt-4 mb-3">Additional Information</h3>
        <p class="mb-4">${post.additionalParagraph}</p>
      ` : ''}
      
      ${post.conclusion ? `
        <h3 class="mt-4 mb-3">Conclusion</h3>
        <p>${post.conclusion}</p>
      ` : ''}
      
      ${socialShareHTML}
    </article>
  `;

  // Remove shimmer effects after content loads
  setTimeout(() => {
    const shimmerElements = document.querySelectorAll('.shimmer, .shimmer-loading');
    shimmerElements.forEach(el => {
      el.classList.remove('shimmer');
      el.classList.remove('shimmer-loading');
    });
  }, 1000);
}

// Add this function to article.js
function renderLatestPosts() {
  const latestPostsContainer = document.querySelector('.latest-posts .row');
  if (!latestPostsContainer) return;

  // Show shimmer loading first
  latestPostsContainer.innerHTML = Array(3).fill(createShimmerCard()).join('');

  // Simulate loading delay and then render actual content
  setTimeout(() => {
    // Get all articles from both main and featured articles
    const allArticles = allBlogPosts.flatMap(post => [
      post,
      ...(post.featuredArticles || [])
    ]);

    // Parse dates and sort articles (newest first)
    const sortedArticles = allArticles.sort((a, b) => {
      const dateA = new Date(parseCustomDate(a.date));
      const dateB = new Date(parseCustomDate(b.date));
      return dateB - dateA;
    });

    // Take the latest 3 articles
    const latestArticles = sortedArticles.slice(0, 3);

    latestPostsContainer.innerHTML = `
      <style>
        .latest-post-card {
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: #fff;
          border: 1px solid #e0e0e0;
          margin-bottom: 1rem;
        }

        .latest-post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .latest-post-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }


        .latest-post-content {
          padding: 1rem;
        }

        .latest-post-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
        }

        .latest-post-category {
          background-color: #6a11cb;
          color: #fff;
          padding: 0.35rem 0.75rem;
          border-radius: 50rem;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-block;
        }

        .latest-post-date {
          color: #6c757d;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .latest-post-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
          color: #6a11cb;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        body.dark-mode .latest-post-card {
          background: #2d2d2d;
          border-color: #404040;
        }

        body.dark-mode .latest-post-title {
          color: #fff;
        }

        body.dark-mode .latest-post-date {
          color: #a0aec0;
        }

        .latest-post-shimmer {
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .shimmer {
          background: #f6f7f8;
          background-image: linear-gradient(
            to right,
            #f6f7f8 0%,
            #edeef1 20%,
            #f6f7f8 40%,
            #f6f7f8 100%
          );
          background-repeat: no-repeat;
          background-size: 800px 100%;
          animation: shimmer 1.5s infinite linear;
        }

        body.dark-mode .shimmer {
          background: #333;
          background-image: linear-gradient(
            to right,
            #333 0%,
            #3a3a3a 20%,
            #333 40%,
            #333 100%
          );
        }

        @keyframes shimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }
      </style>
    ` + latestArticles.map(post => `
      <div class="col-md-12">
        <a href="article.html?id=${post.id}" class="text-decoration-none">
          <div class="latest-post-card">
            <img src="${post.image}" 
                 class="latest-post-image" 
                 alt="${post.title}"
                 loading="lazy">
            <div class="latest-post-content">
              <div class="latest-post-meta">
                <span class="latest-post-category badge">${post.category}</span>
                <span class="latest-post-date">${formatDate(post.date)}</span>
              </div>
              <h5 class="latest-post-title">${post.title}</h5>
            </div>
          </div>
        </a>
      </div>
    `).join('');
  }, 1000);
}

// Helper function to parse custom date formats
function parseCustomDate(dateStr) {
  // Handle different date formats
  const formats = [
    // Friday, 15 March 2024 11:30
    {
      regex: /(\w+), (\d+) (\w+) (\d{4}) (\d{2}):(\d{2})/,
      parse: (match) => `${match[4]}-${getMonthNumber(match[3])}-${match[2]} ${match[5]}:${match[6]}`
    },
    // Wednesday, 10 April 2024 09:15
    {
      regex: /(\w+), (\d+) (\w+) (\d{4}) (\d{2}):(\d{2})/,
      parse: (match) => `${match[4]}-${getMonthNumber(match[3])}-${match[2]} ${match[5]}:${match[6]}`
    }
  ];

  for (const format of formats) {
    const match = dateStr.match(format.regex);
    if (match) {
      return format.parse(match);
    }
  }

  // If no format matches, return the original string
  return dateStr;
}

// Helper function to get month number from name
function getMonthNumber(monthName) {
  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  return months[monthName] || '01';
}

// Helper function to format dates consistently
function formatDate(dateStr) {
  const date = new Date(parseCustomDate(dateStr));
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${dayOfWeek} ${dayOfMonth}, ${month} ${year}`;
}

// Add at the top with other functions
function createShimmerCard() {
  return `
    <div class="col-md-12">
      <div class="card border-0 latest-post-shimmer">
        <div class="shimmer shimmer-image" style="height: 200px; border-radius: 10px;"></div>
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="shimmer shimmer-badge" style="width: 80px; height: 24px; border-radius: 50rem;"></div>
            <div class="shimmer shimmer-date" style="width: 120px; height: 20px;"></div>
          </div>
          <div class="shimmer shimmer-title" style="height: 24px; margin-bottom: 8px;"></div>
          <div class="shimmer shimmer-title" style="height: 24px; width: 80%;"></div>
        </div>
      </div>
    </div>
  `;
}

// Main execution when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const articleContainer = document.getElementById('article-container');
  
  if (articleContainer) {
    // Show shimmer loading state
    articleContainer.innerHTML = `
      <div class="shimmer-card">
        <div class="shimmer shimmer-image"></div>
        <div class="card-body">
          <div class="shimmer shimmer-title"></div>
          <div class="shimmer shimmer-text"></div>
          <div class="shimmer shimmer-text"></div>
        </div>
      </div>
      <div class="social-share-container shimmer-loading">
        <div class="d-flex flex-column align-items-start gap-3">
          <h5 class="share-title mb-0">Share this article</h5>
          <div class="social-share-icons">
            <a href="#" class="social-icon x-twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="social-icon whatsapp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#" class="social-icon facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="social-icon copy">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Rest of your existing code...
  const articleId = getArticleIdFromUrl();
  
  setTimeout(() => {
    if (!articleId) {
      console.error('No article ID found in URL');
      renderLatestPosts();
      return;
    }

    const article = findArticleById(articleId);
    if (article) {
      renderFullArticle(article);
      renderLatestPosts();
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
        <div class="article-not-found text-center mb-4">
          <div class="mb-5">
            <svg class="text-muted mb-4" style="width: 64px; height: 64px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 class="display-6 mb-3">Article Not Found</h2>
            <p class="lead text-muted">Sorry, we couldn't find the article you're looking for.</p>
            
          </div>
          
          <div class="suggested-articles mt-5">
            <h3 class="h4 mb-4">You might be interested in:</h3>
            <div class="row g-4 mt-4">
              ${suggestedArticles.map(article => `                <div class="col-md-4">
                  <div class="card suggested-card border" style="border: 1px solid #e0e0e0 !important;">
                    <img src="${article.image}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge category-badge">${article.category}</span>
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
      
      renderLatestPosts();
    }
  }, 1000); // Show shimmer for 1 second
});


