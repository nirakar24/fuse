// Example animation using JavaScript
const blogPost = document.querySelector('.blog-post');

blogPost.addEventListener('mouseenter', () => {
  blogPost.style.transform = 'scale(1.1)';
  blogPost.style.transition = 'transform 0.3s ease-in-out';
});

blogPost.addEventListener('mouseleave', () => {
  blogPost.style.transform = 'scale(1)';
});