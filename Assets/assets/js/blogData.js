document.addEventListener('DOMContentLoaded', function () {
  // Add styles at the start
  const style = document.createElement('style');
  style.textContent = `
    .blog-posts-wrapper {
      display: flex;
      gap: 2rem;
      overflow: visible !important;
      position: relative;
      width: 100%;
      padding: 1rem 0;
    }
    
    #blog-posts-container {
      overflow: visible !important;
      position: relative;
    }
    
    .blog-post {
      flex: 0 0 calc(33.333% - 1.33rem);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
    }
    
    .blog-post:hover {
      transform: translateY(-10px);
      z-index: 1;
    }

    /* Updated Mobile Responsive Styles */
    @media screen and (max-width: 768px) {
      #blog-posts-container {
        padding: 0 !important;
        margin: 0 auto !important;
        width: 100%;
      }

      .blog-posts-wrapper {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;
        width: 100%;
        max-width: 500px;  /* Limit maximum width on mobile */
        margin: 0 auto;    /* Center the wrapper */
      }

      .blog-post {
        flex: 0 0 100%;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 0 1rem 0 !important;
      }

      .blog-post-content {
        padding: 1rem;
      }

      /* Center pagination */
      .blog-pagination {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem auto;
        padding: 0;
      }

      /* Center swipe indicator */
      .swipe-indicator {
        width: 100%;
        text-align: center;
        margin: 0.5rem auto;
        color: #a5a5a5;
      }
    }

    /* Pagination dots styling */
    .blog-pagination {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin: 20px 0;
      width: 100%;
    }

    .pagination-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ccc;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .pagination-dot.active {
      background: #333;
    }

    /* Adjusted arrow positioning */
    .blog-arrow.left-arrow {
      left: -40px;  /* Moved further left */
    }

    .blog-arrow.right-arrow {
      right: -40px;  /* Moved further right */
    }

    /* Make sure arrows are visible on desktop */
    @media screen and (min-width: 769px) {
      .blog-arrow {
        display: flex !important;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .blog-arrow:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
    }
  `;
  document.head.appendChild(style);

  // Add after the style declaration at the start
  function createShimmerCards(count) {
    const wrapper = document.createElement('div');
    wrapper.className = 'blog-posts-wrapper';
    
    for (let i = 0; i < count; i++) {
      const shimmerCard = document.createElement('div');
      shimmerCard.className = 'blog-post shimmer-wrapper';
      shimmerCard.style.opacity = '0.7';
      shimmerCard.innerHTML = `
        <div class="blog-post-image-wrapper">
          <div class="shimmer shimmer-image"></div>
        </div>
        <div class="blog-post-content">
          <div class="shimmer shimmer-badge"></div>
          <div class="shimmer shimmer-title"></div>
          <div class="shimmer shimmer-text"></div>
          <div class="shimmer shimmer-text"></div>
        </div>
      `;
      wrapper.appendChild(shimmerCard);
    }
    return wrapper;
  }

  // Get data from blog.js
  const { mainBlogPosts, secondPageBlogPosts } = window.blogData || { mainBlogPosts: [], secondPageBlogPosts: [] };

  // Combine and flatten all blog posts including featured articles
  const blogPosts = [...mainBlogPosts, ...secondPageBlogPosts].reduce((acc, post) => {
    // Add main post
    acc.push({
      id: post.id,
      image: post.image,
      alt: post.imageAlt || post.title,
      category: post.category,
      title: post.title,
      text: post.lead ? post.lead.split('<br>')[0] : post.text,
      date: post.date,
      type: post.type || "Article"
    });

    // Add featured articles
    if (post.featuredArticles) {
      acc.push(...post.featuredArticles.map(article => ({
        id: article.id,
        image: article.image,
        alt: article.imageAlt || article.title,
        category: article.category,
        title: article.title,
        text: article.lead ? article.lead.split('<br>')[0] : article.text,
        date: article.date,
        type: article.type || "Article"
      })));
    }

    return acc;
  }, []).sort((a, b) => new Date(b.date) - new Date(a.date));

  const postsPerPage = 3;
  let currentPage = 0;

  function renderBlogPosts(page) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';

    const contentContainer = document.createElement('div');
    contentContainer.style.width = '100%';
    contentContainer.style.position = 'relative';
    container.appendChild(contentContainer);

    // Always create 3 shimmer cards regardless of screen size
    const shimmerCards = createShimmerCards(postsPerPage);
    contentContainer.appendChild(shimmerCards);

    setTimeout(() => {
      contentContainer.innerHTML = '';
      
      // Calculate total pages using consistent postsPerPage
      const totalPages = Math.ceil(blogPosts.length / postsPerPage);
      
      const postsWrapper = document.createElement('div');
      postsWrapper.className = 'blog-posts-wrapper';
      contentContainer.appendChild(postsWrapper);

      // Add posts using consistent pagination
      const start = page * postsPerPage;
      const end = start + postsPerPage;
      const postsToShow = blogPosts.slice(start, end);

      postsToShow.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
          <div class="blog-post-image-wrapper">
            <img src="${post.image}" alt="${post.alt}" class="rounded-image">
          </div>
          <div class="blog-post-content">
            <div class="blog-post-category">${post.category}</div>
            <h5 class="blog-post-title">${post.title}</h5>
            <p class="blog-post-text">${post.text}</p>
            <div class="blog-post-meta">
              <div class="meta-left">
                <span>${post.date}</span>
              </div>
              <a href="article.html?id=${post.id}" class="read-more">Read more</a>
            </div>
          </div>
        `;
        postsWrapper.appendChild(postElement);
      });

      // Update mobile styles
      if (window.innerWidth <= 768) {
        postsWrapper.style.display = 'flex';
        postsWrapper.style.flexDirection = 'column';
        postsWrapper.style.alignItems = 'center';
        postsWrapper.style.maxWidth = '500px';
        postsWrapper.style.margin = '0 auto';
        
        const posts = postsWrapper.querySelectorAll('.blog-post');
        posts.forEach(post => {
            post.style.width = '100%';
            post.style.maxWidth = '100%';
            post.style.margin = '0 0 1rem 0';
        });
      }

      // Add pagination container
      const paginationContainer = document.createElement('div');
      paginationContainer.className = 'blog-pagination';
      
      // Create pagination dots
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.className = `pagination-dot ${i === currentPage ? 'active' : ''}`;
        dot.addEventListener('click', () => changePage(i));
        paginationContainer.appendChild(dot);
      }
      
      contentContainer.appendChild(paginationContainer);

      // Update swipe handler for mobile
      if (window.innerWidth <= 768) {
        const swipeIndicator = document.createElement('div');
        swipeIndicator.className = 'swipe-indicator';
        swipeIndicator.textContent = '← Swipe to navigate →';
        contentContainer.appendChild(swipeIndicator);
      }

      // Add desktop arrows
      if (window.innerWidth > 768) {
        // Add left arrow
        const leftArrow = document.createElement('div');
        leftArrow.className = `blog-arrow left-arrow ${page === 0 ? 'disabled' : ''}`;
        leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        leftArrow.addEventListener('click', () => {
          if (page !== 0) changePage(currentPage - 1);
        });
        contentContainer.appendChild(leftArrow);

        // Add right arrow
        const rightArrow = document.createElement('div');
        rightArrow.className = `blog-arrow right-arrow ${page === totalPages - 1 ? 'disabled' : ''}`;
        rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        rightArrow.addEventListener('click', () => {
          if (page !== totalPages - 1) changePage(currentPage + 1);
        });
        contentContainer.appendChild(rightArrow);
      }

      updatePagination();
      addCardClickListeners();
    }, 1000);
  }

  function updatePagination() {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      if (index === currentPage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function changePage(pageIndex) {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    if (pageIndex >= 0 && pageIndex < totalPages) {
      currentPage = pageIndex;
      renderBlogPosts(currentPage);
    }
  }

  function handleSwipe(direction) {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    currentPage += direction;
    if (currentPage < 0) currentPage = totalPages - 1;
    if (currentPage >= totalPages) currentPage = 0;
    renderBlogPosts(currentPage);
  }

  function addCardClickListeners() {
    const blogPostCards = document.querySelectorAll('.blog-post');
    blogPostCards.forEach(card => {
      card.addEventListener('click', function(e) {
        if (!isMobile && !e.target.classList.contains('read-more')) {
          const readMoreLink = this.querySelector('.read-more');
          readMoreLink.style.display = 'inline-block';
          readMoreLink.style.opacity = '1';
        }
      });
    });
  }

  // Mobile swipe functionality
  const blogPostsContainer = document.getElementById('blog-posts-container');
  let startX, moveX;
  let isSwiping = false;

  blogPostsContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = false;
  });

  blogPostsContainer.addEventListener('touchmove', (e) => {
    moveX = e.touches[0].clientX;
    if (Math.abs(moveX - startX) > 10) {
      isSwiping = true;
    }
  });

  blogPostsContainer.addEventListener('touchend', () => {
    if (isMobile && isSwiping) {
      if (startX - moveX > 50) {
        handleSwipe(1); // Swipe left
      } else if (moveX - startX > 50) {
        handleSwipe(-1); // Swipe right
      }
    }
    isSwiping = false;
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    updatePagination();
    addCardClickListeners();
  });

  // Initial render
  renderBlogPosts(currentPage);
});

