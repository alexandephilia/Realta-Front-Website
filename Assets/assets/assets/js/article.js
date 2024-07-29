console.log('Article.js loaded');

function getArticleIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

function findArticleById(id) {
  console.log('Searching for article with id:', id);
  console.log('Available blog posts:', blogPosts);
  return blogPosts.find(post => post.id === parseInt(id));
}

function renderFullArticle(post) {
  console.log('Rendering article:', post);
  const articleContainer = document.getElementById('article-container');
  if (!articleContainer) {
    console.error('Article container not found');
    return;
  }
  
  // Customize the HTML structure based on the post content
  articleContainer.innerHTML = `
    <article class="pb-5 blog-article">
      <h2 class="display-5 link-body-emphasis mb-3">
        <span class="blog-post-title">${post.title}</span>
      </h2>
      <div class="blog-image-container position-relative overflow-hidden mb-4">
        <img src="${post.image}" alt="${post.title}" class="blog-image">
      </div>
      <p class="blog-meta mb-3">${post.date} in <span class="blog-category">${post.category}</span> by <a href="#" class="text-decoration-none">${post.author}</a></p>
      <p class="blog-lead mb-4">${post.lead}</p>
      ${post.content ? `<div class="blog-content mb-4">${post.content}</div>` : ''}
      ${post.features ? `
        <h3 class="mt-4 mb-3">Key Points</h3>
        <ul class="list-unstyled">
          ${post.features.map(feature => `<li class="blog-list-item"><i class="bi bi-check-circle-fill text-success me-2"></i>${feature}</li>`).join('')}
        </ul>
      ` : ''}
      ${post.imageAlt ? `
        <div class="additional-image-container d-flex justify-content-center mb-4 py-4">
          <img src="${post.imageAlt}" alt="Additional image" class="img-fluid w-80">
        </div>
      ` : ''}
      <aside class="bg-light p-3 mb-4 rounded aside-custom">
        <h4 class="aside-title">Quick Facts</h4>
        <ul class="aside-list">
          <li>Microsoft and Apple's significant shift in AI strategy</li>
          <li>Potential impact on the AI industry landscape</li>
          <li>Implications for future collaborations and competition</li>
        </ul>
      </aside>
      ${post.challenges ? `
        <h3 class="mt-4 mb-3">Challenges and Considerations</h3>
        <p>The article raises several important questions:</p>
        <ol>
          ${post.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
        </ol>
      ` : ''}
      ${post.conclusion ? `
        <h3 class="mt-4 mb-3">What This Means for the Tech Industry</h3>
        <p>${post.conclusion}</p>
      ` : ''}
      ${post.additionalParagraph ? `<p class="mb-4">${post.additionalParagraph}</p>` : ''}
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const articleId = getArticleIdFromUrl();
  console.log('Article ID from URL:', articleId);
  const article = findArticleById(articleId);
  if (article) {
    renderFullArticle(article);
  } else {
    console.error('Article not found');
    // Handle error or redirect
  }
});