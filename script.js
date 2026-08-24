const cursor=document.querySelector('.cursor');
if(cursor && window.matchMedia('(pointer:fine)').matches){
  window.addEventListener('mousemove',e=>{
    cursor.style.left=e.clientX+'px';
    cursor.style.top=e.clientY+'px';
  });
  document.querySelectorAll('a,button,.project').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cursor.style.width='42px';cursor.style.height='42px'});
    el.addEventListener('mouseleave',()=>{cursor.style.width='18px';cursor.style.height='18px'});
  });
}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});
