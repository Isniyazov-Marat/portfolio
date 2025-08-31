
// Active nav highlight
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith(path)) a.classList.add('active');
  });
});
