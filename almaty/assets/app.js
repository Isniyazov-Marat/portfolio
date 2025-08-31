document.addEventListener('DOMContentLoaded',()=>{const p=(location.pathname.split('/').pop()||'index.html');document.querySelectorAll('.menu a').forEach(a=>{const h=a.getAttribute('href');if(h&&h.endsWith(p))a.classList.add('active');});});
document.querySelectorAll('.bar').forEach((bar,i)=>{
  const span = bar.querySelector('span');
  const val = bar.querySelector('.val');
  const v = Number(span.getAttribute('data-value') || 0);
  const pct = Math.min(100,(v / MAX_BAR)*100);
  span.style.width = pct + '%';
  if (span.animate) span.animate([{width:'0%'},{width:pct+'%'}], {duration:900 + i*180, fill:'forwards'});
  if (val) val.textContent = v.toLocaleString(); // число в конце полосы
});
