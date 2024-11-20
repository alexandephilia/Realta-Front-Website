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
  `;
  document.head.appendChild(style);

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
  let isMobile = window.innerWidth <= 768;

  function renderBlogPosts(page) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    // Add left arrow
    const leftArrow = document.createElement('div');
    leftArrow.className = `blog-arrow left-arrow ${page === 0 ? 'disabled' : ''}`;
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftArrow.addEventListener('click', () => {
        if (page !== 0) changePage(currentPage - 1);
    });
    container.appendChild(leftArrow);

    // Add posts wrapper
    const postsWrapper = document.createElement('div');
    postsWrapper.className = 'blog-posts-wrapper';
    container.appendChild(postsWrapper);

    // Add blog posts
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

    // Add right arrow
    const rightArrow = document.createElement('div');
    rightArrow.className = `blog-arrow right-arrow ${page === totalPages - 1 ? 'disabled' : ''}`;
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightArrow.addEventListener('click', () => {
        if (page !== totalPages - 1) changePage(currentPage + 1);
    });
    container.appendChild(rightArrow);

    // Add pagination dots
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'blog-pagination';
    container.appendChild(paginationContainer);

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.className = `pagination-dot ${i === currentPage ? 'active' : ''}`;
        dot.addEventListener('click', () => changePage(i));
        paginationContainer.appendChild(dot);
    }

    updatePagination();
    addCardClickListeners();
  }

  function updatePagination() {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = '';
  
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
    for (let i = 0; i < totalPages; i++) {
      const span = document.createElement('span');
      if (i === currentPage) {
        span.classList.add('active');
      }
      span.addEventListener('click', () => {
        changePage(i);
      });
      paginationContainer.appendChild(span);
    }
  }

  function changePage(pageIndex) {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    if (pageIndex >= 0 && pageIndex < totalPages) {
      currentPage = pageIndex;
      renderBlogPosts(currentPage);
    }
  }

  function handleSwipe(direction) {
    if (isMobile) {
      currentPage += direction;
      if (currentPage < 0) currentPage = Math.ceil(blogPosts.length / postsPerPage) - 1;
      if (currentPage >= Math.ceil(blogPosts.length / postsPerPage)) currentPage = 0;
      renderBlogPosts(currentPage);
    }
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

