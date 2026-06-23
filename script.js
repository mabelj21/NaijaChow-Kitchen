
// DATA
const categories = [
  { icon: '🍚', name: 'Rice Dishes', count: 5 },
  { icon: '🍲', name: 'Soups',       count: 5 },
  { icon: '🫓', name: 'Swallows',    count: 5  },
  { icon: '🍗', name: 'Proteins',    count: 5 },
  { icon: '🥘', name: 'Stews',       count: 5  },
  { icon: '🫙', name: 'Snacks',      count: 5  },
  { icon: '🥤', name: 'Drinks',      count: 5  },
  { icon: '🍜', name: 'Noodles',     count: 4  },
];

const products = [
  { id: 1,  name: 'Jollof Rice',       tag: 'Rice Dishes', cat: 'Rice Dishes', price: 2800, oldPrice: 3500, badge: 'Best Seller', desc: 'Party-style smoky jollof rice cooked in rich tomato base with fragrant bay leaves and spices.',           img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PcmR6Tx36kq18eammIzyzOQmbFQavj1eW3yRb7ANbw&s=10' },
  { id: 2,  name: 'Egusi Soup',        tag: 'Soups',       cat: 'Soups',       price: 3500, oldPrice: null, badge: null,          desc: 'Classic ground melon seed soup cooked with assorted meat, stockfish, and leafy vegetables.',             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58ermFozzJHjzw0RGXxrlH46cnaP1hMREtHiumc0H2Q&s=10' },
  { id: 3,  name: 'Pounded Yam',       tag: 'Swallows',    cat: 'Swallows',    price: 1500, oldPrice: 2000, badge: 'Popular',     desc: 'Silky smooth pounded yam — the perfect accompaniment to any Nigerian soup.',                            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxKe9F1SZGIvwlbET9rkTnchd96_if75sHd7k1HvlEQ&s=10' },
  { id: 4,  name: 'Pepper Soup',       tag: 'Soups',       cat: 'Soups',       price: 4200, oldPrice: null, badge: null,          desc: 'Hot and spicy catfish pepper soup with native spices, perfect for rainy evenings.',                      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph95uco3LYlEfIbaBG48CW_NE2XTUv9zvgGxV4JRDow&s=10' },
  { id: 5,  name: 'Pizza',             tag: 'Snacks',      cat: 'Snacks',      price: 5000,  oldPrice: 3000, badge: '20% Off',     desc: 'Perfectly made Pizza. Soft and flavourful.',                                                                 img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhB0W3EGmzwTiaQU7JLG47MmWUA-kH-PH-44Zbx7tPw&s=10' },
  { id: 6,  name: 'Fried Rice',        tag: 'Rice Dishes', cat: 'Rice Dishes', price: 2500, oldPrice: null, badge: null,          desc: 'Colourful Nigerian fried rice with mixed veggies, liver, and aromatic seasonings.',                      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zXkk2F-MCIYelh0UeUgggcuYlf7Dr7ZhTSGY1b1Ozg&s=10' },
  { id: 7,  name: 'Suya',              tag: 'Proteins',    cat: 'Proteins',    price: 2200, oldPrice: 2800, badge: 'Hot 🔥',      desc: 'Spicy grilled beef skewers marinated in yaji spice mix, served with onions and tomatoes.',               img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBYXaAdp11iaPIFXw2mdSO3v-59Fv-FH9VL571i-eNw&s=10' },
  { id: 8,  name: 'Banga Soup',        tag: 'Soups',       cat: 'Soups',       price: 3800, oldPrice: null, badge: null,          desc: 'Palm nut soup with assorted meat and dried fish, rich in traditional flavour.',                           img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzdOOiwfHn_MmL1TkErB-AZ0LYTX00MAINPCg_Tl9pg&s=10' },
  { id: 9,  name: 'Akara',             tag: 'Snacks',      cat: 'Snacks',      price: 600,  oldPrice: null, badge: 'Breakfast',   desc: 'Deep-fried bean cakes, crispy on the outside, fluffy inside. A beloved Nigerian breakfast.',              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXnXB9fmWH8TqBwmFQcT-QlhYwPUtIXuCgheCKNbXVw&s=10' },
  { id: 10, name: 'Ofada Rice & Stew', tag: 'Rice Dishes', cat: 'Rice Dishes', price: 3200, oldPrice: null, badge: 'Local Fav',   desc: 'Native unpolished ofada rice served with spicy ayamase (designer stew) and assorted offal.',             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8HS3pLc2HJodDpiQBoIBjHzE7K7ow4OgMyA8H0rlTQ&s=10' },
  { id: 11, name: 'Ofe Onugbu',        tag: 'Soups',       cat: 'Soups',       price: 3600, oldPrice: null, badge: null,          desc: 'Bitter leaf soup from the Southeast, thick and hearty with cocoyam thickener and ozu.',                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHMBPIiFBclB3ebD1NauSez6MfWEu13YhHMIx9r5Wgw&s=10' },
  { id: 12, name: 'Chapman',           tag: 'Drinks',      cat: 'Drinks',      price: 2000,  oldPrice: null, badge: '🥤 Drink',    desc: 'Classic Nigerian party drink — a refreshing blend of Fanta, Sprite, bitters, and grenadine.',            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIghu8ejTqdUw2QfLHJ2bcnkQXaegI_FdNzSWsAqDaQ&s=10' },
];

const testimonials = [
  { name: 'Chioma O.',    loc: 'Port Harcourt, Rivers state',    stars: 5, text: 'The jollof rice tastes exactly like what my mum makes at home. The smoky flavour is unbeatable. I order every Friday now!' },
  { name: 'Emeka T.',     loc: 'Ikeja, Lagos',    stars: 5, text: 'Suya arrived hot and spicy, just the way I like it. The delivery was super fast. Best Nigerian food delivery service by far!' },
  { name: 'Fatima A.',    loc: 'Abuja',           stars: 5, text: 'I was skeptical at first, but the egusi soup changed my mind. Authentic taste, generous portion, and great packaging. 10/10!' },
  { name: 'Oluwaseun B.', loc: 'Victoria Island', stars: 5, text: 'As a Yoruba man abroad visiting, this gave me serious home vibes. The ofada rice and stew is absolutely perfect.' },
  { name: 'Ngozi E.',     loc: 'Lekki, Lagos',    stars: 5, text: 'I always order for family gatherings now. Portions are generous, food is always fresh, and the packaging is neat and eco-friendly.' },
  { name: 'Tunde K.',     loc: 'Surulere, Lagos', stars: 5, text: 'The pepper soup on a cold rainy night? Absolute perfection. Naija Chow Kitchen never disappoints. My whole family loves it!' },
];

const marqueeItems = [
  'Jollof Rice','Egusi Soup','Suya','Pounded Yam','Banga Soup',
  'Pizza','Fried Rice','Akara','Pepper Soup','Ofada Stew','Ofe Onugbu','Chapman'
];

const filters = ['All','Rice Dishes','Soups','Swallows','Proteins','Snacks','Drinks'];

// STATE
let cart         = [];
let activeFilter = 'All';
let favorites    = new Set();


// INIT
window.addEventListener('DOMContentLoaded', () => {
  renderMarquee();
  renderCategories();
  renderFilterTabs();
  renderProducts();
  renderTestimonials();
  initReveal();
  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
});

// MARQUEE
function renderMarquee() {
  const track = document.getElementById('marqueeTrack');
  const items = [...marqueeItems, ...marqueeItems];
  track.innerHTML = items
    .map(i => `<span class="marquee-item"><span class="marquee-dot">★</span>${i}</span>`)
    .join('');
}


//CATEGORIES
function renderCategories() {
  document.getElementById('catsGrid').innerHTML = categories
    .map(c => `
      <div class="cat-card" onclick="filterByCategory('${c.name}')">
        <span class="cat-icon">${c.icon}</span>
        <div class="cat-name">${c.name}</div>
        <div class="cat-count">${c.count} items</div>
      </div>`).join('');
}

function filterByCategory(name) {
  activeFilter = name;
  renderFilterTabs();
  renderProducts();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// FILTER TABS
function renderFilterTabs() {
  document.getElementById('filterTabs').innerHTML = filters
    .map(f => `<button class="tab ${activeFilter === f ? 'active' : ''}" onclick="setFilter('${f}')">${f}</button>`)
    .join('');
}

function setFilter(f) {
  activeFilter = f;
  renderFilterTabs();
  renderProducts();
}

// PRODUCTS
function renderProducts() {
  const filtered = activeFilter === 'All' ? products : products.filter(p => p.cat === activeFilter);
  document.getElementById('showingCount').textContent = filtered.length;
  document.getElementById('productsGrid').innerHTML = filtered.map(p => `
    <div class="product-card reveal">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <button class="fav-btn ${favorites.has(p.id) ? 'liked' : ''}" onclick="toggleFav(${p.id})">
          ${favorites.has(p.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-body">
        <div class="product-tag">${p.tag}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            ₦${p.price.toLocaleString()}
            ${p.oldPrice ? `<span>₦${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <button class="add-btn" id="addBtn${p.id}" onclick="addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>`).join('');
  initReveal();
}

// FAVOURITES
function toggleFav(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  renderProducts();
}

// CART-ADD
function addToCart(id) {
  const product  = products.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCartUI();
  showToast(`🍲 ${product.name} added to cart!`);
  const btn = document.getElementById(`addBtn${id}`);
  if (btn) {
    btn.textContent = '✓ Added';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = '+ Add'; btn.classList.remove('added'); }, 1500);
  }
}

// CART-REMOVE
function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI();
  renderCartItems();
}

// CART-QUANTITY
function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartUI(); renderCartItems(); }
}

// CART-UI UPDATE
function updateCartUI() {
  document.getElementById('cartCount').textContent = cart.reduce((s, x) => s + x.qty, 0);
  renderCartItems();
}

function renderCartItems() {
  const el   = document.getElementById('cartItems');
  const foot = document.getElementById('cartFoot');
  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty"><span class="empty-icon">🍽️</span><p>Your cart is empty.<br>Add some delicious Nigerian meals!</p></div>`;
    foot.style.display = 'none';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="ci-img" src="${item.img}" alt="${item.name}"/>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">₦${(item.price * item.qty).toLocaleString()}</div>
        <div class="ci-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="ci-remove" onclick="removeFromCart(${item.id})">✕ Remove</button>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('cartTotal').textContent = `₦${cart.reduce((s, x) => s + x.price * x.qty, 0).toLocaleString()}`;
  foot.style.display = 'block';
}

// CART-OPEN/CLOSE/CHECKOUT
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  renderCartItems();
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}
function checkout() {
  showToast("🎉 Order placed! We'll deliver in 3 hours. Enjoy!");
  cart = [];
  updateCartUI();
  closeCart();
}

// TESTIMONIALS
function renderTestimonials() {
  document.getElementById('testiGrid').innerHTML = testimonials.map(t => `
    <div class="testi-card reveal">
      <div class="stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.name[0]}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-loc">📍 ${t.loc}</div>
        </div>
      </div>
    </div>`).join('');
  initReveal();
}

// NEWSLETTER
function subscribeNewsletter() {
  const email = document.getElementById('nlEmail').value.trim();
  if (!email || !email.includes('@')) { showToast('⚠️ Please enter a valid email address.'); return; }
  showToast('🎉 Subscribed! Your 10% discount code is on its way.');
  document.getElementById('nlEmail').value = '';
}

// TOAST
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

// SCROLL REVEAL
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

// MOBILE MENU
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

