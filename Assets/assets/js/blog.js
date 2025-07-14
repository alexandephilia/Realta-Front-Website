// First, let's organize our blog posts into two separate arrays
const mainBlogPosts = [
  {
    id: 1,
    title: "Microsoft Drops From OpenAI's Boards",
    image: "assets/img/news/new7.png",
    imageAlt: "assets/img/news/computer.fcd1bd54.svg",
    date: "Wednesday, 10 April 2024 09:15",
    category: "Technology",
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

    conclusion: "If Apple succeeds in bringing home robots to market, it could transform daily life for millions. From managing smart home devices to providing companionship, these robots could become an integral part of the modern household.",

    featuredArticles: [
      {
        id: 2,
        title: "Introducing Apple Intelligence",
        image: "assets/img/news/news1.jpg",
        imageAlt: "assets/img/news/computer.fcd1bd54.svg",
        date: "Friday, 15 March 2024 11:30",
        category: "Technology",
        type: "News",
        lead: "Apple prepares to showcase its groundbreaking AI initiative at WWDC, with the introduction of 'Apple Intelligence' - a transformative leap forward in human-computer interaction that could redefine the Apple ecosystem.",
        content: `<p>Apple is set to unveil a suite of artificial intelligence features called "Apple Intelligence" at the upcoming Worldwide Developers Conference (WWDC). This new technology promises to revolutionize how users interact with Apple devices. The new features include enhanced Siri integration that will provide more natural and contextual interactions, along with advanced AI algorithms that enable more sophisticated task handling and automation. Apple Intelligence will also deliver seamless integration across all Apple devices while maintaining the company's signature privacy-first approach, ensuring user data remains secure and protected throughout the experience.</p>`,
        features: [
          "Enhanced Siri Integration",
          "Advanced AI Algorithms",
          "Seamless Device Integration",
          "Privacy-First Approach"
        ],
        challenges: [
          "Privacy and Security",
          "User Adoption",
          "Technical Implementation",
          "Market Competition"
        ],
        additionalParagraph: "The introduction of Apple Intelligence marks a significant milestone in Apple's AI strategy...",
        conclusion: "This development could reshape how users interact with their Apple devices..."
      },
      {
        id: 3,
        title: "OpenAI's: The Next Evolution in AI Language Models",
        image: "assets/img/news/news6.jpg",
        imageAlt: "OpenAI Language Models",
        date: "Wednesday, 20 March 2024 13:45",
        category: "AI",
        type: "Analysis",
        lead: "Exploring the anticipated capabilities and potential impact of OpenAI's upcoming GPT-5 model, which promises groundbreaking advances in natural language processing and artificial intelligence...",
        content: `<p>OpenAI's upcoming GPT-5 model represents a significant leap forward in AI language model capabilities...</p>
                  <h2>Key Advancements:</h2>
                  <ul>
                    <li>Enhanced Understanding</li>
                    <li>Improved Reasoning</li>
                    <li>Better Context Handling</li>
                    <li>Reduced Hallucinations</li>
                  </ul>`,
        features: [
          "Enhanced Understanding",
          "Improved Reasoning",
          "Better Context Handling",
          "Reduced Hallucinations"
        ],
        challenges: [
          "Computational Requirements",
          "Training Data Quality",
          "Ethical Considerations",
          "Deployment Complexity"
        ],
        additionalParagraph: "The development of GPT-5 represents a major milestone in AI research...",
        conclusion: "This advancement could fundamentally change how we interact with AI systems..."
      },
      {
        id: 4,
        title: "The Future of AI Regulation",
        image: "assets/img/news/news3.jpg",
        imageAlt: "AI Regulation",
        date: "Monday, 18 March 2024 12:30",
        category: "AI",
        type: "Analysis",
        lead: "Global regulatory bodies are developing comprehensive frameworks to govern artificial intelligence development and deployment, balancing innovation with ethical considerations...",
        content: `<p>Global regulatory bodies are developing comprehensive frameworks to govern artificial intelligence development and deployment, balancing innovation with ethical considerations...</p>
                  <h2>Key Points:</h2>
                  <ul>
                    <li>Comprehensive Frameworks</li>
                    <li>Balancing Innovation</li>
                    <li>Ethical Considerations</li>
                    <li>Innovation and Ethical Balance</li>
                  </ul>`,
        features: [
          "Comprehensive Frameworks",
          "Balancing Innovation",
          "Ethical Considerations",
          "Innovation and Ethical Balance"
        ],
        challenges: [
          "Complexity",
          "Stakeholder Collaboration",
          "Resource Allocation",
          "Public Trust"
        ],
        additionalParagraph: "The development of AI regulation is a complex process that requires collaboration between various stakeholders...",
        conclusion: "This development could reshape the landscape of AI development and deployment..."
      },
      {
        id: 5,
        title: "AI's Impact on Healthcare",
        image: "assets/img/news/news4.jpg",
        imageAlt: "AI in Healthcare",
        date: "Saturday, 16 March 2024 14:15",
        category: "Healthcare",
        type: "Analysis",
        lead: "Healthcare institutions are increasingly adopting AI-powered solutions for diagnosis, treatment planning, and patient care management, revolutionizing medical practices...",
        content: `<p>Healthcare institutions are increasingly adopting AI-powered solutions for diagnosis, treatment planning, and patient care management, revolutionizing medical practices...</p>
                  <h2>Key Impacts:</h2>
                  <ul>
                    <li>Improved Diagnosis</li>
                    <li>Enhanced Treatment Planning</li>
                    <li>Improved Patient Care</li>
                    <li>Reduced Healthcare Costs</li>
                  </ul>`,
        features: [
          "Improved Diagnosis",
          "Enhanced Treatment Planning",
          "Improved Patient Care",
          "Reduced Healthcare Costs"
        ],
        challenges: [
          "Data Privacy",
          "Ethical Considerations",
          "Resource Allocation",
          "Public Trust"
        ],
        additionalParagraph: "The integration of AI in healthcare is a significant development that requires careful consideration of ethical and regulatory issues...",
        conclusion: "This development could reshape the landscape of healthcare..."
      }
    ]
  }
];

const secondPageBlogPosts = [
  {
    id: "s",
    title: "The Rise of Fintech in Modern Banking",
    image: "assets/img/news/news11.png",
    imageAlt: "Fintech Revolution",
    date: "Tuesday, 9 April 2024 10:30",
    category: "Finance",
    lead: `Fintech innovations are revolutionizing the banking sector, with companies like Stripe and Square leading the charge. These technologies are transforming how financial services are delivered, promising increased efficiency and accessibility.
           <br><br>Recent studies show that banks adopting fintech solutions report up to 40% faster transaction processing times, though questions about security and regulatory compliance remain at the forefront of industry discussions.`,
    features: [
      "Seamless Digital Payments",
      "Enhanced Customer Experience",
      "AI-Driven Financial Insights",
      "Blockchain-Based Security"
    ],
    challenges: [
      "Regulatory Compliance",
      "Cybersecurity Threats",
      "Market Competition",
      "Technology Integration"
    ],
    additionalParagraph: "The adoption of fintech solutions marks a significant shift in banking practices. While these technologies offer unprecedented efficiency gains, they also raise important questions about data privacy and the future role of traditional banks.",
    conclusion: "As fintech continues to evolve, it is likely to become an integral part of the modern financial landscape, fundamentally changing how banking services are delivered.",
    featuredArticles: [
      {
        id: 7,
        title: "Cryptocurrency: The New Frontier",
        image: "assets/img/news/news12.png",
        imageAlt: "Cryptocurrency",
        date: "Monday, 8 April 2024 14:20",
        category: "Finance",
        type: "Research",
        lead: "Cryptocurrencies are gaining traction as a viable alternative to traditional currencies, potentially reshaping global financial systems...",
        content: `<p>A growing number of investors are turning to cryptocurrencies as a hedge against inflation and economic instability...</p>`,
        features: [
          "Decentralized Transactions",
          "Global Accessibility",
          "Inflation Hedge",
          "Innovative Financial Products"
        ],
        challenges: [
          "Regulatory Uncertainty",
          "Market Volatility",
          "Security Risks",
          "Adoption Barriers"
        ],
        additionalParagraph: "The rise of cryptocurrencies could accelerate the shift towards a more decentralized financial system...",
        conclusion: "The implications for global finance and investment strategies are profound..."
      },
      {
        id: 8,
        title: "The Future of Digital Banking",
        image: "assets/img/news/news7.jpg",
        imageAlt: "Digital Banking",
        date: "Sunday, 7 April 2024 09:45",
        category: "Finance",
        type: "Analysis",
        lead: "Digital banking platforms are reshaping the financial landscape, promising a more user-friendly and efficient banking experience...",
        content: `<p>The evolution of digital banking continues to redefine how consumers interact with financial institutions...</p>`,
        features: [
          "User-Friendly Interfaces",
          "24/7 Accessibility",
          "Personalized Financial Services",
          "Cost-Effective Operations"
        ],
        challenges: [
          "Data Privacy Concerns",
          "Technological Disruptions",
          "Customer Trust",
          "Competitive Pressure"
        ],
        additionalParagraph: "Digital banking represents a fundamental shift in how financial services are accessed and managed...",
        conclusion: "The transition to digital banking could revolutionize consumer finance..."
      },
      {
        id: 9,
        title: "Sustainable Investing: A Growing Trend",
        image: "assets/img/news/news8.jpg",
        imageAlt: "Sustainable Investing",
        date: "Saturday, 6 April 2024 16:30",
        category: "Finance",
        type: "Report",
        lead: "Investors are increasingly focusing on sustainable investing, balancing financial returns with environmental and social impact...",
        content: `<p>The push for sustainable investing is gaining momentum as investors seek to align their portfolios with their values...</p>`,
        features: [
          "Environmental Impact",
          "Social Responsibility",
          "Long-Term Growth",
          "Ethical Governance"
        ],
        challenges: [
          "Performance Metrics",
          "Market Perception",
          "Regulatory Frameworks",
          "Investment Risks"
        ],
        additionalParagraph: "The move towards sustainable investing represents a crucial step in responsible finance...",
        conclusion: "Sustainable investing practices are becoming increasingly important..."
      },
      {
        id: 10,
        title: "The Evolution of Payment Systems",
        image: "assets/img/news/news10.png",
        imageAlt: "Payment Systems",
        date: "Friday, 5 April 2024 11:15",
        category: "Finance",
        type: "Technology",
        lead: "Payment systems are transforming how transactions are conducted, bringing efficiency and security to financial exchanges...",
        content: `<p>The rapid evolution of payment systems is enabling new possibilities in digital transactions and financial inclusion...</p>`,
        features: [
          "Instant Transactions",
          "Enhanced Security",
          "Cost Reduction",
          "Global Reach"
        ],
        challenges: [
          "Fraud Prevention",
          "Regulatory Compliance",
          "Technological Integration",
          "User Adoption"
        ],
        additionalParagraph: "Payment systems are becoming increasingly crucial for modern financial operations...",
        conclusion: "The future of finance lies increasingly in advanced payment systems..."
      }
    ]
  }
];

// Combine them for total count, but keep them separate for rendering
const totalBlogPosts = [...mainBlogPosts, ...secondPageBlogPosts];
const postsPerPage = 10; // Changed from 1 to 10 items per page
let currentPage = 1;

function renderBlogPosts() {
  const blogContainer = document.getElementById('blog-container');
  blogContainer.innerHTML = '';
  
  // Calculate start and end indices for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  // Get posts for current page
  const currentPosts = totalBlogPosts.slice(startIndex, endIndex);
  
  // Render the current page's posts
  currentPosts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.className = 'pb-4 blog-article';
    
    // Create the featured articles grid HTML
    const featuredArticlesHTML = post.featuredArticles ? `
      <div class="row mt-5 featured-articles-grid">
        ${post.featuredArticles.map((article, idx) => `
          <div class="col-12 col-md-6 mb-4">
            <div class="custom-blog-card">
              <div class="custom-blog-card__image-container" style="cursor: pointer;" onclick="window.location.href='article.html?id=${article.id}'">
                <div class="category-badge">${article.category}</div>
                <img src="${article.image}" class="custom-blog-card__image" alt="${article.imageAlt}">
                <div class="custom-blog-card__overlay"></div>
                <h5 class="custom-blog-card__title">${article.title}</h5>
              </div>
              <div class="custom-blog-card__content">
                <p class="custom-blog-card__text">${article.lead}</p>
                <div class="custom-blog-card__footer">
                  <div class="custom-blog-card__meta">
                    <span class="custom-blog-card__date">${formatDate(article.date)}</span>
                  </div>
                  <a href="article.html?id=${article.id}" class="custom-blog-card__read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    ` : '';

    postElement.innerHTML = `
      <div class="main-blog-post">
        <h2 class="display-5 link-body-emphasis mb-3">
          <a href="article.html?id=${post.id}" class="blog-post-title">${post.title}</a>
        </h2>
        <div class="blog-image-container position-relative overflow-hidden mb-4" style="cursor: pointer;" onclick="window.location.href='article.html?id=${post.id}'">
          <img src="${post.image}" alt="${post.title}" class="blog-image">
        </div>
        <div class="blog-post-content">
          <p class="blog-meta mb-3">${formatDate(post.date)} in <span class="blog-category">${post.category}</span></p>
          <p class="blog-lead mb-4">${post.lead}</p>
          <div class="text-end mt-4">
            <a href="article.html?id=${post.id}" class="blog-btn">
              <span class="circle"></span>
              <span class="text">Read Full Article</span>
              <svg class="arr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
              </svg>
              <svg class="arr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      ${featuredArticlesHTML}
    `;
    blogContainer.appendChild(postElement);
  });

  // Update pagination
  const totalPages = Math.ceil(totalBlogPosts.length / postsPerPage);
  const paginationElement = document.createElement('div');
  paginationElement.className = 'blog-pagination-container mt-0';
  paginationElement.innerHTML = `
    <div class="pagination-wrapper">
      <button class="pagination-btn prev-btn ${currentPage === 1 ? 'disabled' : ''}" 
              onclick="previousPage(event)" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
      </button>
      
      <div class="pagination-numbers">
        ${Array.from({length: totalPages}, (_, i) => i + 1)
          .map(num => `
            <button class="pagination-number ${num === currentPage ? 'active' : ''}"
                    onclick="goToPage(${num})">
              ${num}
            </button>
          `).join('')}
      </div>
      
      <button class="pagination-btn next-btn ${currentPage === totalPages ? 'disabled' : ''}" 
              onclick="nextPage(event)" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="pagination-info">
      Page ${currentPage} of ${totalPages}
    </div>
  `;
  
  blogContainer.appendChild(paginationElement);
}

// Update navigation functions
function goToPage(page) {
  currentPage = page;
  renderBlogPosts();
}

function previousPage(event) {
  // Prevent default behavior
  event.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    renderBlogPosts();
  }
}

function nextPage(event) {
  // Prevent default behavior
  event.preventDefault();
  const totalPages = Math.ceil(totalBlogPosts.length / postsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderBlogPosts();
  }
}

// Initial render
document.addEventListener('DOMContentLoaded', function() {
  currentPage = 1;
  renderBlogPosts();
  renderCategories();
  setupCategoryClickHandlers();
});

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

// Function to render categories
function renderCategories() {
  const categoriesContainer = document.querySelector('.categories-container .category-list');
  if (!categoriesContainer) return;

  const categories = calculateCategories();
  
  categoriesContainer.innerHTML = categories.map(({category, count}) => `
    <div class="category-card">
      <div class="category-icon">
        <i class="fas fa-tags"></i>
      </div>
      <div class="category-content">
        <h5 class="category-title">${category}</h5>
        <span class="category-count">${count} article${count !== 1 ? 's' : ''}</span>
      </div>
    </div>
  `).join('');
  
  setupCategoryClickHandlers();
}

// Simplified category calculation function - removed icon mapping
function calculateCategories() {
  const allArticles = totalBlogPosts.flatMap(post => [
    post,
    ...(post.featuredArticles || [])
  ]);
  
  const categoryCount = allArticles.reduce((acc, article) => {
    const category = article.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  
  return Object.entries(categoryCount).map(([category, count]) => ({
    category,
    count
  }));
}

// Add click event handler for category cards
function setupCategoryClickHandlers() {
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', function() {
      const selectedCategory = this.querySelector('.category-title').textContent;
      filterPostsByCategory(selectedCategory);
    });
  });
}

// Function to filter and display posts by category
function filterPostsByCategory(category) {
  const blogContainer = document.getElementById('blog-container');
  
  const latestPostTitles = document.querySelectorAll('.latest-post-title');
  const allArticles = totalBlogPosts.flatMap(post => [
    post,
    ...(post.featuredArticles || [])
  ]);
  
  // Filter articles by selected category
  const filteredArticles = allArticles.filter(article => article.category === category);
  
  // Hide ALL "Latest Posts" titles when showing filtered results
  latestPostTitles.forEach(title => {
    if (!title.closest('.category-header')) { // Don't hide if it's inside category header
      title.style.display = 'none';
    }
  });
  
  // Update the blog container title and content
  const containerHTML = `
    <div class="category-header mb-4">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="latest-post-title pb-4 mb-0">
          ${category} Articles
        </h2>
        <button class="clear-filter-btn d-flex align-items-center" onclick="clearFilter()">
          <i class="fas fa-times-circle"></i>
          <span>Clear filter</span>
        </button>
      </div>
    </div>
    <div class="row g-4">
      ${filteredArticles.map(post => `
        <div class="col-md-6">
          <div class="category-post-card">
            <div class="category-post-image" style="cursor: pointer;" onclick="window.location.href='article.html?id=${post.id}'">
              <img src="${post.image}" alt="${post.title}">
              <div class="category-post-overlay"></div>
              <div class="category-badge-fixed">${post.category.toUpperCase()}</div>
            </div>
            <div class="category-post-content">
              <div class="category-post-header">
                <span class="category-post-date">${formatDate(post.date)}</span>
              </div>
              <div class="category-post-body">
                <h3 class="category-post-title">${post.title}</h3>
                <p class="category-post-excerpt">${post.lead.split('<br>')[0].substring(0, 100)}...</p>
              </div>
              <div class="category-post-footer">
                <a href="article.html?id=${post.id}" class="category-post-link">
                  Read More <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  blogContainer.innerHTML = containerHTML;
}

// Update the clearFilter function
function clearFilter() {
  const latestPostTitles = document.querySelectorAll('.latest-post-title');
  latestPostTitles.forEach(title => {
    title.style.display = 'inline-block'; // Changed from 'block' to 'inline-block'
    // Reset any potentially modified styles
    title.style.width = 'auto';
    title.style.position = 'relative';
  });
  
  // Add a small delay before re-rendering to ensure styles are properly reset
  setTimeout(() => {
    renderBlogPosts();
  }, 50);
}
// Update the CSS styles for better consistency
const categoryStyle = document.createElement('style');
categoryStyle.textContent = `
  .category-post-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }

  .category-post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  }

  .category-post-image {
    position: relative;
    height: 200px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .category-post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .category-post-card:hover .category-post-image img {
    transform: scale(1.1);
  }

  .category-post-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
  }

  .category-post-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1.5rem;
  }

  .category-post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .category-post-date {
    font-size: 0.85rem;
    color: #666;
  }

  .category-badge {
    background-color: #7209d4;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .category-post-body {
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .category-post-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .category-post-excerpt {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 0;
  }

  .category-post-footer {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }

  .category-post-link {
    color: #7209d4;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: gap 0.3s ease;
  }

  .category-post-link:hover {
    gap: 0.8rem;
    color: #5a07a8;
  }

  /* Dark mode styles */
  body.dark-mode .category-post-card {
    background: #2d2d2d;
  }

  body.dark-mode .category-post-title {
    color: #fff;
  }

  body.dark-mode .category-post-excerpt,
  body.dark-mode .category-post-date {
    color: #aaa;
  }

  body.dark-mode .category-badge {
    background-color: #b388ff;
    color: white;
  }

  body.dark-mode .category-post-footer {
    border-top-color: #444;
  }

  body.dark-mode .category-post-link {
    color: #b388ff;
  }

  body.dark-mode .category-post-link:hover {
    color: #9b6dff;
  }

  .clear-filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: none;
    background: transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    .clear-filter-btn {
      min-width: 130px;
    }
  }

  .clear-filter-btn i {
    color: #dc3545;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }

  .clear-filter-btn span {
    color: #ff4444;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .clear-filter-btn:hover {
    background-color: #ff44441a;
  }

  .clear-filter-btn:hover i {
    color: #c82333;
  }

  .clear-filter-btn:hover span {
    color: #c82333;
  }

  body.dark-mode .clear-filter-btn i {
    color: #ff4d4d;
  }

  body.dark-mode .clear-filter-btn span {
    color: #ff6b6b;
  }

  body.dark-mode .clear-filter-btn:hover {
    background-color: #ff6b6b1a;
  }

  body.dark-mode .clear-filter-btn:hover i,
  body.dark-mode .clear-filter-btn:hover span {
    color: #ff8585;
  }

  /* Add these new styles */
  .latest-post-title {
    display: inline-block;
    position: relative;
    width: auto;
  }



  /* Dark mode adjustments */
  body.dark-mode .latest-post-title::after {
    background: linear-gradient(90deg, #b388ff, #4b5eff 33%, #00d5e6);
  }

  .category-header .d-flex {
    min-height: 60px;
  }

  .clear-filter-btn {
    height: fit-content;
    margin-bottom: 1rem;
  }

  .latest-post-title {
    margin: 0;
    line-height: 1.5;
  }

  .latest-post-title::after {
    bottom: -5px;
  }

  .category-badge-fixed {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: #7209d494 !important;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  body.dark-mode .category-badge-fixed {
    background-color: #7209d494 !important;
    color: white;
  }

  .category-post-card:hover .category-badge {
    display: none;
  }

  .category-post-image {
    position: relative;
    height: 200px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .category-post-overlay {
    z-index: 1;
  }
`;
document.head.appendChild(categoryStyle);

// Update the title styles
const titleStyle = document.createElement('style');
titleStyle.textContent = `
  .blog-post-title {
    color: #6a11cb !important;
    cursor: pointer;
    transition: opacity 0.3s ease;
    display: inline-block;
  }

  .blog-post-title:hover {
    opacity: 0.8;
  }

  .featured-title {
    color: #6a11cb !important;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  .featured-title:hover {
    opacity: 0.8;
  }

  body.dark-mode .blog-post-title,
  body.dark-mode .featured-title {
    color: #6a11cb !important;
  }
`;
document.head.appendChild(titleStyle);

window.blogData = {
  mainBlogPosts,
  secondPageBlogPosts
};

// Add standardized date formatting function
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

// Update the styles to match article-column
const blogStyle = document.createElement('style');
blogStyle.textContent = `
  .blog-meta {
    font-family: 'Proxima Nova', sans-serif;
    color: #6c757d;
    font-size: 0.9rem;
  }

  .blog-category {
    color: #6a11cb;
    transition: color 0.3s ease;
  }

  .blog-category:hover {
    color: #7a4bd7;
  }

  body.dark-mode .blog-meta {
    color: #a0aec0;
  }

  body.dark-mode .blog-category {
    color: #9054d0;
  }
`;
document.head.appendChild(blogStyle);

