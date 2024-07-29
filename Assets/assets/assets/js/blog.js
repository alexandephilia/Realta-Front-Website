document.addEventListener('DOMContentLoaded', function () {
  const blogPosts = [
    {
      id: 1,
      image: "assets/img/news/news2.jpg",
      alt: "Child Development",
      category: "Tech",
      title: "Microsoft Drops From OpenAI's Board",
      text: "Microsoft has relinquished its observer seat on OpenAI's board amid growing antitrust scrutiny, with Apple also opting out of a similar position, as reported by the Financial Times, Bloomberg, and others.",
      date: "12 Aug 2023",
      type: "News",
      link: ""
    },
    {
      id: 2,
      image: "assets/img/news/news1.jpg",
      alt: "Job Interview",
      category: "Tech",
      title: "Introducing Apple Intelligence",
      text: "Apple is set to unveil a suite of artificial intelligence features called \"Apple Intelligence\" at the upcoming Worldwide Developers Conference (WWDC).",
      date: "12 Aug 2023",
      type: "News",
    },
    {
      id: 3,
      image: "assets/img/news/news3.jpg",
      alt: "Tech",
      category: "Tech",
      title: "How Neuromorphic Chips Work",
      text: "Neuromorphic computing is a cutting-edge approach to computer engineering that emulates the neural architecture and processes of the human brain to achieve high efficiency and adaptability.",
      date: "12 Aug 2023",
      type: "News"
    },
    {
      id: 4,
      image: "assets/img/news/news5.jpg",
      alt: "AI Ethics",
      category: "Breaking News",
      title: "The Rolls-Royce Nuclear Micro-Reactor",
      text: "Rolls-Royce is pioneering a nuclear micro-reactor designed to generate 1-10 megawatts of energy, offering a compact, versatile power solution for diverse applications. ",
      date: "15 Aug 2023",
      type: "Opinion"
    },
    {
      id: 5,
      image: "assets/img/news/news4.jpg",
      alt: "Quantum Computing",
      category: "Computer",
      title: "Quantum Computing Breakthrough",
      text: "Scientists have achieved a major milestone in quantum computing, demonstrating quantum supremacy in a complex calculation that would take traditional supercomputers thousands of years.",
      date: "18 Aug 2023",
      type: "News"
    },
    {
      id: 6,
      image: "assets/img/news/news6.jpg",
      alt: "Cybersecurity",
      category: "Cybersecurity",
      title: "OpenAI Acquires Rockset",
      text: "OpenAI's acquisition of Rockset, a real-time analytics database company, marks a significant move to enhance its AI capabilities and strengthen its position in the competitive AI landscape.",
      date: "20 Aug 2023",
      type: "Analysis"
    }
  ];

  const postsPerPage = 3;
  let currentPage = 0;
  let isMobile = window.innerWidth <= 768; // Define mobile breakpoint

  function renderBlogPosts(page) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';

    const start = page * postsPerPage;
    const end = start + postsPerPage;
    const postsToShow = blogPosts.slice(start, end);

    postsToShow.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'blog-post card'; // Remove h-100 class
      postElement.innerHTML = `
        <div class="card-img-top-wrapper">
          <img src="${post.image}" alt="${post.alt}" class="card-img-top rounded-image">
        </div>
        <div class="card-body d-flex flex-column">
          <div class="blog-post-category mb-2">${post.category}</div>
          <h5 class="blog-post-title card-title">${post.title}</h5>
          <p class="blog-post-text card-text flex-grow-1">${post.text}</p>
          <hr class="my-3">
          <div class="blog-post-meta d-flex justify-content-between align-items-center">
            <div>
              <span class="me-3">${post.date}</span>
              <span>${post.type}</span>
            </div>
            <a href="article.html?id=${post.id}" class="read-more">Read more</a>
          </div>
        </div>
      `;
      container.appendChild(postElement);
    });
    
    
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
    if (!isMobile) {
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


// BLOG MICROSITE
const blogPosts = [
  {
    id: 1,
    title: "Microsoft Drops From OpenAI's Boards",
    image: "assets/img/news/news2.jpg",
    imageAlt: "assets/img/news/computer.fcd1bd54.svg",
    date: "April 10, 2024",
    category: "Technology",
    author: "John Appleseed",
    lead: `Microsoft has relinquished its observer seat on OpenAI's board amid growing antitrust scrutiny, with Apple also opting out of a similar position, as reported by the Financial Times, Bloomberg, and others. This move reflects the tech giants' efforts to address regulatory concerns about their influence in the AI sector, 
              <br> <br> Antitrust authorities in the US, UK, and EU have been closely examining Microsoft's substantial investment in OpenAI, raising concerns about potential control over the AI startup.`,
    features: [
      "Enhanced Siri Integration for Comprehensive Voice Command Control",
      "Sophisticated Smart Home Device Management and Automation",
      "Advanced AI Algorithms for Personalized Learning and Adaptation to User Preferences",
      "Seamless Integration with Existing Apple Ecosystem for a Unified User Experience"
    ],
    challenges: [
      "Privacy and data security in the home",
      "Balancing functionality with aesthetics",
      "Ensuring seamless integration with existing Apple devices",
      "Pricing strategy for mass market adoption"
    ],
    additionalParagraph: "This move by Apple represents a significant shift in their product strategy. While the company has long been a leader in personal computing and mobile devices, entering the home robotics market puts them in direct competition with established players like iRobot and emerging startups in the field. The potential for Apple to leverage its existing ecosystem and AI capabilities could give it a unique advantage in this space.",

    conclusion: "If Apple succeeds in bringing home robots to market, it could transform daily life for millions. From managing smart home devices to providing companionship, these robots could become an integral part of the modern household."
  },
  {
    id: 2,
    title: "Introducing Apple Intelligence",
    image: "assets/img/news/news1.jpg",
    imageAlt: "assets/img/news/computer.fcd1bd54.svg",
    date: "April 15, 2024",
    category: "Technology",
    author: "Jane Doe",
    lead: "Apple has announced the launch of Apple Intelligence, a new AI-powered home robotics platform designed to revolutionize the way we live and work.",
    features: [
      "Enhanced Siri Integration for Comprehensive Voice Command Control",
      "Sophisticated Smart Home Device Management and Automation",
      "Advanced AI Algorithms for Personalized Learning and Adaptation to User Preferences",
      "Seamless Integration with Existing Apple Ecosystem for a Unified User Experience"
    ],
    challenges: [
      "Privacy and data security in the home",
      "Balancing functionality with aesthetics",
      "Ensuring seamless integration with existing Apple devices",
      "Pricing strategy for mass market adoption"
    ],
    additionalParagraph: "This move by Apple represents a significant shift in their product strategy. While the company has long been a leader in personal computing and mobile devices, entering the home robotics market puts them in direct competition with established players like iRobot and emerging startups in the field. The potential for Apple to leverage its existing ecosystem and AI capabilities could give it a unique advantage in this space.",

    conclusion: "If Apple succeeds in bringing home robots to market, it could transform daily life for millions. From managing smart home devices to providing companionship, these robots could become an integral part of the modern household."
  }
  // Add more blog post objects here
];

const postsPerPage = 4;
let currentPage = 1;

function renderBlogPosts(posts) {
  const blogContainer = document.getElementById('blog-container');
  blogContainer.innerHTML = ''; // Clear existing content

  posts.forEach((post, index) => {
    const postElement = document.createElement('article');
    postElement.className = 'pb-5 blog-article';
    postElement.innerHTML = `
     <style>
           
           .blog-post-title {
            display: inline;
            line-height: 1.6;
            font-family: 'Proxima Nova', sans-serif !important;
            font-weight: 700;
            font-size: 2.5rem;
            background: linear-gradient(180deg, transparent 60%, rgba(106, 17, 203, 0.3) 60%);
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
          }
          .title-highlight {
              background: linear-gradient(180deg, transparent 60%, #ffff00 60%);
              box-decoration-break: clone;
              -webkit-box-decoration-break: clone;
              display: inline-block;
            }
            .blog-lead::first-letter {
              initial-letter: 3;
              -webkit-initial-letter: 3;
              color: #black;
              font-weight: bold;
              margin-right: 0.5rem;
            }
            .blog-article {
              font-family: 'Proxima Nova', sans-serif !important;
              line-height: 1.6;
              font-size: 1.1rem;
            }
           .blog-list-item,  {
              font-family: 'Proxima Nova', sans-serif !important;
              font-size: 1.1rem ;
            }

            .blog-lead {
              line-height: 1.5; /* or any other value that matches your design */
              overflow: hidden;
            }
       
          </style>
      <h2 class="display-5 link-body-emphasis mb-3">
        <span class="blog-post-title">${post.title}</span>
      </h2>
      <div class="blog-image-container position-relative overflow-hidden mb-4">
        <img src="${post.image}" alt="${post.title}" class="blog-image">
      </div>
      <p class="blog-meta mb-3">${post.date} in <span class="blog-category">${post.category}</span> by <a href="#" class="text-decoration-none">${post.author}</a></p>
      <p class="blog-lead mb-4">${post.lead}</p>
      <div class="text-end mt-4">
        <a href="article.html?id=${post.id}" class="blog-btn">
          <span class="circle"></span>
          <span class="text">Read Full Article</span>
          <svg class="arr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
          <svg class="arr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
        </a>
      </div>
      <h3 class="latest-post-title pb-4 mb-0">Featuring</h3>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="custom-blog-card">
          <div class="custom-blog-card__image-container">
            <img src="assets/img/news/new7.png" class="custom-blog-card__image" alt="Meta Platforms's New AI-Powered Search Tool">
            <div class="custom-blog-card__overlay"></div>
            <h5 class="custom-blog-card__title">Meta Platforms's New AI-Powered Search Tool</h5>
          </div>
          <div class="custom-blog-card__content">
            <p class="custom-blog-card__text">Meta Platforms introduces a revolutionary AI-powered search tool...</p>
            <div class="custom-blog-card__footer">
              <a href="#" class="custom-blog-card__read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="custom-blog-card">
          <div class="custom-blog-card__image-container">
            <img src="assets/img/news/news6.jpg" class="custom-blog-card__image" alt="React Hooks">
            <div class="custom-blog-card__overlay"></div>
            <h5 class="custom-blog-card__title">Mastering React Hooks: A Comprehensive Guide</h5>
          </div>
          <div class="custom-blog-card__content">
            <p class="custom-blog-card__text">Dive deep into React Hooks with our comprehensive guide...</p>
            <div class="custom-blog-card__footer">
              <a href="#" class="custom-blog-card__read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    blogContainer.appendChild(postElement);
  });


  // Apply the createExcerpt function to each blog lead
  document.querySelectorAll('.blog-lead').forEach(lead => createExcerpt(lead, 5));
}

// Update the initial render to use the new function
renderBlogPosts(blogPosts.slice(0, postsPerPage));



function createExcerpt(element, lines) {
  const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
  const maxHeight = lineHeight * lines;
  const originalContent = element.textContent;

  if (element.offsetHeight <= maxHeight) {
    return; // Full text fits within specified lines
  }

  // Binary search to find the right amount of text
  let low = 0;
  let high = originalContent.length;
  
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    element.textContent = originalContent.slice(0, mid) + '...';
    
    if (element.offsetHeight > maxHeight) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  // Find the last complete sentence
  let lastSentenceEnd = originalContent.slice(0, low).lastIndexOf('.');
  if (lastSentenceEnd === -1 || lastSentenceEnd < low / 2) {
    // If no sentence end found or it's too short, find last complete word
    lastSentenceEnd = originalContent.slice(0, low).lastIndexOf(' ');
  }

  // Set the final excerpt
  if (lastSentenceEnd !== -1) {
    element.textContent = originalContent.slice(0, lastSentenceEnd + 1) + '...';
  } else {
    element.textContent = originalContent.slice(0, low) + '...';
  }

  // Ensure we haven't exceeded the height limit
  while (element.offsetHeight > maxHeight && element.textContent.length > 3) {
    element.textContent = element.textContent.slice(0, -4) + '...';
  }
}



function renderPagination() {
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const paginationNumbers = document.getElementById('pagination-numbers');
  const paginationControls = document.getElementById('pagination-controls');
  const paginationCounter = document.getElementById('pagination-counter');

  paginationNumbers.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.classList.add('btn', 'btn-outline-primary', 'rounded-circle', 'me-2');
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => goToPage(i));
    if (i === currentPage) {
      pageButton.classList.add('active');
    }
    paginationNumbers.appendChild(pageButton);
  }

  paginationControls.innerHTML = `
              <button class="btn btn-outline-primary rounded-pill me-2 ${currentPage === 1 ? 'disabled btn-disabled' : ''}" onclick="previousPage()" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
              <button class="btn btn-outline-primary rounded-pill ${currentPage === totalPages ? 'disabled btn-disabled' : ''}" onclick="nextPage()" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
            `;

  paginationCounter.textContent = `Page ${currentPage} of ${totalPages}`;
}

function goToPage(page) {
  currentPage = page;
  renderBlogPost(blogPosts[currentPage - 1]);
  renderPagination();
}

function previousPage() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

function nextPage() {
  if (currentPage < Math.ceil(blogPosts.length / postsPerPage)) {
    goToPage(currentPage + 1);
  }
}

// Initial render
renderBlogPost(blogPosts[0]);
renderPagination();

// Add animation transition effects
const blogContainer = document.getElementById('blog-container');
blogContainer.style.transition = 'opacity 0.3s ease-in-out';

function animatePageTransition() {
  blogContainer.style.opacity = '0';
  setTimeout(() => {
    renderBlogPost(blogPosts[currentPage - 1]);
    blogContainer.style.opacity = '1';
  }, 300);
}

// Update the goToPage function to use the animation
function goToPage(page) {
  currentPage = page;
  animatePageTransition();
  renderPagination();
}


// STICKY

document.addEventListener('DOMContentLoaded', function () {
  const stickyElement = document.querySelector('.position-sticky');
  const stickyTop = stickyElement.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > stickyTop) {
      stickyElement.style.position = 'fixed';
      stickyElement.style.top = '2rem';
    } else {
      stickyElement.style.position = 'static';
    }
  });
});


