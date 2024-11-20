document.addEventListener('DOMContentLoaded', function () {
  const blogPosts = [
    {
      id: 1,
      image: "assets/img/news/news2.jpg",
      alt: "Child Development",
      category: "Tech",
      title: "Microsoft Drops From OpenAI's Board",
      text: "Microsoft has relinquished its observer seat on OpenAI's board amid growing antitrust scrutiny, with Apple also opting out of a similar position, as reported by the Financial Times, Bloomberg, and others.",
      date: "Monday, Aug 12, 2023",
      type: "News",
      link: "",
      
    },
    {
      id: 2,
      image: "assets/img/news/news3.jpg",
      alt: "Tech",
      category: "Tech",
      title: "How Neuromorphic Chips Work",
      text: "Neuromorphic computing is a cutting-edge approach to computer engineering that emulates the neural architecture and processes of the human brain to achieve high efficiency and adaptability.",
      date: "Monday, Aug 12, 2023",
      type: "News"
    },
    {
      id: 3,
      image: "assets/img/news/news5.jpg",
      alt: "AI Ethics",
      category: "Breaking News",
      title: "The Rolls-Royce Nuclear Micro-Reactor",
      text: "Rolls-Royce is pioneering a nuclear micro-reactor designed to generate 1-10 megawatts of energy, offering a compact, versatile power solution for diverse applications. ",
      date: "Monday, Aug 15, 2023",
      type: "Opinion"
    },
    {
      id: 4,
      image: "assets/img/news/news4.jpg",
      alt: "Quantum Computing",
      category: "Computer",
      title: "Quantum Computing Breakthrough",
      text: "Scientists have achieved a major milestone in quantum computing, demonstrating quantum supremacy in a complex calculation that would take traditional supercomputers thousands of years.",
      date: "Monday, Aug 18, 2023",
      type: "News"
    },
    {
      id: 5,
      image: "assets/img/news/news6.jpg",
      alt: "Cybersecurity", 
      category: "Cybersecurity",
      title: "OpenAI Acquires Rockset",
      text: "OpenAI's acquisition of Rockset, a real-time analytics database company, marks a significant move to enhance its AI capabilities and strengthen its position in the competitive AI landscape.",
      date: "Monday, Aug 20, 2023",
      type: "Analysis"
    },
    {
      id: 6,
      image: "assets/img/news/news7.jpg",
      alt: "AI Research",
      category: "Technology",
      title: "DeepMind's Latest AI Breakthrough",
      text: "DeepMind has announced a groundbreaking advancement in protein structure prediction, using their AI system to map previously unknown protein structures with unprecedented accuracy.",
      date: "Monday, Aug 22, 2023",
      type: "Research"
    }
  ];

  const postsPerPage = 3;
  let currentPage = 0;
  let isMobile = window.innerWidth <= 768; // Define mobile breakpoint

  function renderBlogPosts(page) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';

    // Calculate total pages
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    // Add left arrow with disabled state
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
      container.appendChild(postElement);
    });

    // Add right arrow with disabled state
    const rightArrow = document.createElement('div');
    rightArrow.className = `blog-arrow right-arrow ${page === totalPages - 1 ? 'disabled' : ''}`;
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightArrow.addEventListener('click', () => {
        if (page !== totalPages - 1) changePage(currentPage + 1);
    });
    container.appendChild(rightArrow);

    // Add pagination dots container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'blog-pagination';
    container.appendChild(paginationContainer);

    // Add pagination dots
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

  // Handle window resize to update isMobile status
  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    updatePagination();
    addCardClickListeners(); // Re-add listeners with updated isMobile status
  });

  renderBlogPosts(currentPage);
});

