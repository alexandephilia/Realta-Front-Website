
// First, let's organize our blog posts into two separate arrays
const mainBlogPosts = [
  {
    id: 1,
    title: "Microsoft Drops From OpenAI's Boards",
    image: "assets/img/news/news2.jpg",
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
    image: "assets/img/news/news8.jpg",
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
        image: "assets/img/news/news8.jpg",
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
        image: "assets/img/news/news8.jpg",
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
const postsPerPage = 1; // Since we want one main post with its featured articles per page
let currentPage = 1;

function renderBlogPosts() {
  const blogContainer = document.getElementById('blog-container');
  blogContainer.innerHTML = '';

  // Determine which posts to show based on current page
  const currentPosts = currentPage === 1 ? mainBlogPosts : secondPageBlogPosts;

  // Render the current page's posts
  currentPosts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.className = 'pb-4 blog-article';
    
    // Create the featured articles grid HTML
    const featuredArticlesHTML = post.featuredArticles ? `
      <div class="row mt-5">
        ${post.featuredArticles.map((article, idx) => `
          ${idx % 2 === 0 ? '<div class="row mb-4">' : ''}
          <div class="col-md-6">
            <div class="custom-blog-card" style="cursor: pointer" onclick="window.location.href='article.html?id=${article.id}'">
              <div class="custom-blog-card__image-container position-relative">
                <div class="category-badge">${article.category}</div>
                <img src="${article.image}" class="custom-blog-card__image" alt="${article.imageAlt}">
                <div class="custom-blog-card__overlay"></div>
                <h5 class="custom-blog-card__title">${article.title}</h5>
              </div>
              <div class="custom-blog-card__content">
                <p class="custom-blog-card__text">${article.lead}</p>
                <div class="custom-blog-card__footer">
                  <div class="custom-blog-card__meta">
                    <span class="custom-blog-card__date">${article.date}</span>
                  </div>
                  <a href="article.html?id=${article.id}" class="custom-blog-card__read-more">Read More</a>
                </div>
              </div>
            </div>
          </div>
          ${idx % 2 === 1 || idx === post.featuredArticles.length - 1 ? '</div>' : ''}
        `).join('')}
      </div>
    ` : '';

    postElement.innerHTML = `
      <style>
           
           .blog-post-title {
            display: inline;
            line-height: 1.6;
            font-family: 'Proxima Nova', sans-serif !important;
            font-weight: 700;
            font-size: 2.5rem;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
          }
          .title-highlight {
              background: linear-gradient(180deg, transparent 60%, #ffff00 60%);
              box-decoration-break: clone;
              -webkit-box-decoration-break: clone;
              display: inline-block;
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
              font-size: 19px;
            }
       
          </style>
      <h2 class="display-5 link-body-emphasis mb-3">
        <span class="blog-post-title">${post.title}</span>
      </h2>
      <div class="blog-image-container position-relative overflow-hidden mb-4">
        <img src="${post.image}" alt="${post.title}" class="blog-image">
      </div>
      <p class="blog-meta mb-3">${post.date}</p>
      <p class="blog-lead mb-4">${post.lead}</p>
      <div class="text-end mt-4">
        <a href="article.html?id=${post.id}" class="blog-btn">
          <span class="circle"></span>
          <span class="text">Read Full Article</span>
          <svg class="arr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
          <svg class="arr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
        </a>
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



