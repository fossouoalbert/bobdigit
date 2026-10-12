
// ============ DONNÉES ============
const arrivageProducts = [
  { name: "Huile d'olive premium", price: "12.90€", oldPrice: "18.00€", imgs: [
    "IMG-20260923-WA0028.jpg",
    "IMG-20260923-WA0028.jpg",
    "IMG-20260923-WA0028.jpg",
    "IMG-20260923-WA0028.jpg",
  ]},
  { name: "Miel de montagne", price: "15.50€", oldPrice: "22.00€", imgs: [
    "IMG-20260923-WA0026.jpg",
    "IMG-20260923-WA0026.jpg",
    "IMG-20260923-WA0026.jpg",
    "IMG-20260923-WA0026.jpg",
  ]},
  { name: "Café arabica bio", price: "9.90€", oldPrice: "14.00€", imgs: [
    "IMG-20260923-WA0022.jpg",
    "IMG-20260923-WA0022.jpg",
    "IMG-20260923-WA0022.jpg",
    "IMG-20260923-WA0022.jpg",
  ]},
  { name: "Chocolat noir 85%", price: "6.50€", oldPrice: "9.00€", imgs: [
    "IMG-20260923-WA0023.jpg",
    "IMG-20260923-WA0023.jpg",
    "IMG-20260923-WA0023.jpg",
    "IMG-20260923-WA0023.jpg",
  ]},
  { name: "Thé vert jasmin", price: "8.20€", oldPrice: "12.00€", imgs: [
    "IMG-20260923-WA0024(1).jpg",
    "IMG-20260923-WA0024(1).jpg",
        "IMG-20260923-WA0024(1).jpg",
            "IMG-20260923-WA0024(1).jpg",
  ]},
  { name: "Épices mélangées", price: "7.80€", oldPrice: "11.00€", imgs: [
    "IMG-20260923-WA0025.jpg",
    "IMG-20260923-WA0025.jpg",
    "IMG-20260923-WA0025.jpg",
    "IMG-20260923-WA0025.jpg",
  ]},
  { name: "Noix de cajou", price: "11.00€", oldPrice: "15.50€", imgs: [
    "IMG-20260923-WA0026.jpg",
        "IMG-20260923-WA0026.jpg",
            "IMG-20260923-WA0026.jpg",
                "IMG-20260923-WA0026.jpg",
  ]},
  { name: "Confiture artisanale", price: "5.90€", oldPrice: "8.50€", imgs: [
    "IMG-20260923-WA0021.jpg",
        "IMG-20260923-WA0021.jpg",
       "IMG-20260923-WA0021.jpg",
    "IMG-20260923-WA0021.jpg",

  ]},
];

const products = [
  { name: "Pack Découverte", price: "29.90€", rating: 4.9, reviews: 342, tag: "Populaire", imgs: [
    "IMG-20260930-WA0007.jpg",
    "IMG-20260930-WA0007.jpg",
        "IMG-20260930-WA0007.jpg",
            "IMG-20260930-WA0007.jpg",
  ]},
  { name: "Coffret Premium", price: "49.90€", rating: 5.0, reviews: 189, tag: "Best-seller", imgs: [
    "IMG-20260930-WA0008.jpg",
    "IMG-20260930-WA0008.jpg",
        "IMG-20260930-WA0008.jpg",
            "IMG-20260930-WA0008.jpg",
  ]},
  { name: "Sélection Bio", price: "34.50€", rating: 4.8, reviews: 256, tag: "Nouveau", imgs: [
    "IMG-20260930-WA0005.jpg",
     "IMG-20260930-WA0005.jpg",
    "IMG-20260930-WA0005.jpg",
    "IMG-20260930-WA0005.jpg",
  ]},
  { name: "Box Mensuelle", price: "24.90€", rating: 4.9, reviews: 412, tag: "Abonnement", imgs: [
    "IMG-20260930-WA0004.jpg",
     "IMG-20260930-WA0004.jpg",
        "IMG-20260930-WA0004.jpg",
           "IMG-20260930-WA0004.jpg",
  ]},

    { name: "Sélection Bio", price: "34.50€", rating: 4.8, reviews: 256, tag: "Nouveau", imgs: [
    "IMG-20260923-WA0026.jpg",
    "IMG-20260923-WA0026.jpg",
        "IMG-20260923-WA0026.jpg",
            "IMG-20260923-WA0026.jpg",
  ]},
  { name: "Box Mensuelle", price: "24.90€", rating: 4.9, reviews: 412, tag: "Abonnement", imgs: [
    "IMG-20260923-WA0024(1).jpg",
    "IMG-20260923-WA0024(1).jpg",
        "IMG-20260923-WA0024(1).jpg",
            "IMG-20260923-WA0024(1).jpg",
  ]},







  
];

const reviews = [
  { name: "Marie L.", rating: 5, text: "Produits exceptionnels ! La qualité est au rendez-vous et la livraison ultra rapide. Je recommande à 100%.", date: "Il y a 2 jours", avatar: "ML" },
  { name: "Thomas B.", rating: 5, text: "Je suis client depuis 6 mois et je n'ai jamais été déçu. Le service client est top et les produits de qualité premium.", date: "Il y a 5 jours", avatar: "TB" },
  { name: "Sophie D.", rating: 5, text: "Enfin une boutique qui propose de vrais produits de qualité ! Les prix sont justes et l'emballage soigné.", date: "Il y a 1 semaine", avatar: "SD" },
  { name: "Karim A.", rating: 5, text: "Livraison en 24h comme promis. Les produits sont conformes à la description. Je recommande vivement !", date: "Il y a 1 semaine", avatar: "KA" },
  { name: "Julie M.", rating: 5, text: "Un vrai coup de cœur pour le coffret premium. Idéal pour offrir. Mes amis ont adoré !", date: "Il y a 2 semaines", avatar: "JM" },
  { name: "Pierre R.", rating: 4, text: "Très satisfait de ma commande. Rapport qualité/prix excellent. Je reviendrai commander.", date: "Il y a 2 semaines", avatar: "PR" },
];

// ============ THEME ============
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

function setTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  iconSun.classList.toggle('hidden', dark);
  iconMoon.classList.toggle('hidden', !dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  // Update theme-color meta
  const tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', dark ? '#060d1f' : '#10b981');
}
themeToggle.addEventListener('click', () => {
  setTheme(!document.documentElement.classList.contains('dark'));
});
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme(true);
}

// ============ MOBILE MENU ============
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const burgerIcon = document.getElementById('burgerIcon');
const burgerBtn = document.getElementById('burgerBtn');

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) closeMobileMenu();
  else openMobileMenu();
}
function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  burgerIcon.classList.add('open');
  burgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  burgerIcon.classList.remove('open');
  burgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// ============ DROPDOWNS ============
function toggleDropdown(id) {
  const dd = document.getElementById(id);
  const isOpen = dd.classList.contains('open');
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  if (!isOpen) dd.classList.add('open');
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
});

// ============ FLYER UPLOAD ============
function uploadFlyer(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    document.getElementById('flyerUpload').innerHTML = `<img src="${ev.target.result}" alt="Flyer promotionnel">`;
    document.getElementById('flyerPlaceholder').style.display = 'none';
    showToast('Flyer ajouté !');
  };
  reader.readAsDataURL(file);
}

// ============ RENDER ARRIVAGE ============
function renderArrivage() {
  const track = document.getElementById('arrivageTrack');
  track.innerHTML = arrivageProducts.map(p => {
    const discount = Math.round((1 - parseFloat(p.price)/parseFloat(p.oldPrice))*100);
    return `
    <article class="carousel-item w-[220px] sm:w-[260px] flex-shrink-0" itemscope itemtype="https://schema.org/Product">
      <div class="card product-card rounded-2xl overflow-hidden h-full">
        <div class="hover-gallery">
          ${p.imgs.map((img, i) => `<img class="gallery-img" src="${img}" alt="${p.name} - vue ${i+1}" loading="lazy" itemprop="image">`).join('')}
          <div class="gallery-dots"><span></span><span></span><span></span><span></span></div>
          <span class="absolute top-3 left-3 badge-new text-xs font-bold px-2.5 py-1 rounded-full" style="z-index:10">NEW</span>
          <span class="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full" style="z-index:10">-${discount}%</span>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-sm mb-1" itemprop="name">${p.name}</h3>
          <div class="flex items-center gap-2 mb-3">
            <span class="font-extrabold text-lg" style="color: var(--primary)" itemprop="price">${p.price}</span>
            <span class="text-muted text-xs line-through">${p.oldPrice}</span>
          </div>
          <button class="btn-primary w-full py-2 rounded-lg text-sm font-semibold">Ajouter</button>
        </div>
      </div>
    </article>
  `}).join('');
}
renderArrivage();

function scrollArrivage(dir) {
  const container = document.getElementById('arrivageContainer');
  container.scrollBy({ left: dir * 300, behavior: 'smooth' });
}

// ============ RENDER PRODUITS ============
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => `
    <article class="card product-card rounded-2xl overflow-hidden" itemscope itemtype="https://schema.org/Product">
      <div class="hover-gallery">
        ${p.imgs.map((img, i) => `<img class="gallery-img" src="${img}" alt="${p.name} - vue ${i+1}" loading="lazy" itemprop="image">`).join('')}
        <div class="gallery-dots"><span></span><span></span><span></span><span></span></div>
        <span class="absolute top-3 left-3 section-badge text-xs font-bold px-2.5 py-1 rounded-full" style="z-index:10">${p.tag}</span>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-sm mb-1" itemprop="name">${p.name}</h3>
        <div class="flex items-center gap-1 text-xs mb-2" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
          <span class="star">★</span>
          <span class="font-semibold" itemprop="ratingValue">${p.rating}</span>
          <span class="text-muted">(<span itemprop="reviewCount">${p.reviews}</span>)</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="font-extrabold text-lg" style="color: var(--primary)" itemprop="price">${p.price}</span>
          <button onclick="shareProduct('${p.name}')" class="w-9 h-9 rounded-lg card flex items-center justify-center hover:scale-110 transition" title="Partager" aria-label="Partager ${p.name}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}
renderProducts();

// ============ CARROUSEL AVIS ============
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewDots = document.getElementById('reviewDots');
let currentReview = 0;
let reviewsPerView = 3;

function updateReviewsPerView() {
  if (window.innerWidth < 640) reviewsPerView = 1;
  else if (window.innerWidth < 1024) reviewsPerView = 2;
  else reviewsPerView = 3;
}

function renderReviews() {
  updateReviewsPerView();
  reviewsTrack.innerHTML = reviews.map(r => `
    <article class="card rounded-2xl p-6 flex-shrink-0" style="width: calc(${100/reviewsPerView}% - ${(reviewsPerView-1)*16/reviewsPerView}px); margin-right: 16px;" itemscope itemtype="https://schema.org/Review" role="listitem">
      <div class="flex items-center gap-3 mb-4">
        <div class="avatar-circle" aria-hidden="true">${r.avatar}</div>
        <div>
          <div class="font-bold text-sm" itemprop="author">${r.name}</div>
          <div class="text-xs text-muted" itemprop="datePublished">${r.date}</div>
        </div>
        <div class="ml-auto flex" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
          <meta itemprop="worstRating" content="1">
          <meta itemprop="bestRating" content="5">
          <meta itemprop="ratingValue" content="${r.rating}">
          ${'<span class="star" aria-hidden="true">★</span>'.repeat(r.rating)}
        </div>
      </div>
      <p class="text-sm leading-relaxed" itemprop="reviewBody">"${r.text}"</p>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-2 text-xs text-green-500 font-semibold">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Avis vérifié
        </div>
        <button onclick="shareReview('${r.name}')" class="text-xs text-muted hover:text-[var(--primary)] inline-flex items-center gap-1" aria-label="Partager l'avis de ${r.name}">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
          Partager
        </button>
      </div>
    </article>
  `).join('');

  const totalPages = Math.ceil(reviews.length / reviewsPerView);
  reviewDots.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('button');
    dot.className = 'h-2.5 rounded-full transition-all';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Page ${i+1}`);
    dot.style.background = i === currentReview ? 'var(--primary)' : 'var(--border)';
    dot.style.width = i === currentReview ? '24px' : '10px';
    dot.onclick = () => goToReview(i);
    reviewDots.appendChild(dot);
  }
  updateReviewPosition();
}

function updateReviewPosition() {
  const itemWidth = reviewsTrack.children[0]?.offsetWidth || 0;
  const offset = currentReview * reviewsPerView * (itemWidth + 16);
  reviewsTrack.style.transform = `translateX(-${offset}px)`;
}

function goToReview(i) {
  currentReview = i;
  updateReviewPosition();
  renderReviews();
}

function nextReview() {
  const totalPages = Math.ceil(reviews.length / reviewsPerView);
  currentReview = (currentReview + 1) % totalPages;
  updateReviewPosition();
  [...reviewDots.children].forEach((d, i) => {
    d.style.background = i === currentReview ? 'var(--primary)' : 'var(--border)';
    d.style.width = i === currentReview ? '24px' : '10px';
  });
}

renderReviews();
let reviewInterval = setInterval(nextReview, 4000);
window.addEventListener('resize', renderReviews);

// ============ PARTAGE ============
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function sharePage() {
  if (navigator.share) {
    navigator.share({ title: 'MaBoutique', text: 'Découvrez MaBoutique - Produits premium', url: location.href });
  } else {
    copyLink();
  }
}

function copyLink() {
  navigator.clipboard.writeText(location.href).then(() => showToast('Lien copié !'));
}

function shareWhatsApp() {
  const text = encodeURIComponent('Découvrez MaBoutique ! Produits premium avec livraison rapide 👉 ' + location.href);
  window.open('https://wa.me/?text=' + text, '_blank');
}

function shareFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href), '_blank');
}

function shareTwitter() {
  const text = encodeURIComponent('Découvrez MaBoutique ! Produits premium 👉 ');
  window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + encodeURIComponent(location.href), '_blank');
}

function shareProduct(name) {
  const text = `Regarde ce produit sur MaBoutique : ${name} 👉 ${location.href}`;
  if (navigator.share) {
    navigator.share({ title: name, text, url: location.href });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('Produit copié !'));
  }
}

function shareReview(name) {
  const text = `Avis de ${name} sur MaBoutique 👉 ${location.href}`;
  if (navigator.share) {
    navigator.share({ title: 'Avis client', text, url: location.href });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('Avis copié !'));
  }
}

// Fermer menu mobile au resize desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) closeMobileMenu();
});

// Fermer menu avec Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
});