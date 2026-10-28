const grid = document.getElementById('products');
let cart = 0, wishes = 0;
  const toast = document.getElementById('toast');
  function say(msg){
    toast.textContent = msg; toast.classList.add('show');
    clearTimeout(say.t); say.t = setTimeout(()=>toast.classList.remove('show'), 1800);
  }
  grid.addEventListener('click', e=>{
    const add = e.target.closest('.add');
    const wish = e.target.closest('.wish');
    if(add){ cart++; document.getElementById('cartCount').textContent = cart; say('Added to cart'); }
    if(wish){
      const on = wish.classList.toggle('on');
      wishes += on ? 1 : -1;
      document.getElementById('wishCount').textContent = wishes;
      say(on ? 'Saved to wishlist' : 'Removed from wishlist');
    }
  });
  document.getElementById('burger').addEventListener('click', ()=>document.getElementById('menu').classList.toggle('open'));
  document.getElementById('newsForm').addEventListener('submit', e=>{ e.preventDefault(); e.target.reset(); say('Subscribed'); });
