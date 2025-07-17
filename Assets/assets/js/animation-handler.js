// Shared scroll-based animation handler for micro pages
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

function handleAnimationScroll() {
    const elements = document.querySelectorAll(
        '.fade-in-left, .fade-in-right, .feature-item, .card, .slide-in'
    );
    elements.forEach((el, index) => {
        if (isElementInViewport(el)) {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        }
    });
}

window.addEventListener('scroll', handleAnimationScroll);
window.addEventListener('load', handleAnimationScroll);
setTimeout(handleAnimationScroll, 100);
