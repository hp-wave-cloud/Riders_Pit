/* ===== MOTOPARTS — main.js ===== */

/* ---- Hero Slider ---- */
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.slide-dot');
  var current = 0;
  var autoTimer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  var btnNext = document.getElementById('slideNext');
  var btnPrev = document.getElementById('slidePrev');
  if (btnNext) btnNext.addEventListener('click', function () { next(); resetAuto(); });
  if (btnPrev) btnPrev.addEventListener('click', function () { prev(); resetAuto(); });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(parseInt(this.dataset.index));
      resetAuto();
    });
  });

  startAuto();
})();


/* ---- Countdown Timer ---- */
(function () {
  var endTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (37 * 60 * 1000);

  function update() {
    var now = new Date().getTime();
    var diff = endTime - now;
    if (diff <= 0) {
      document.getElementById('cntDays').textContent = '00';
      document.getElementById('cntHrs').textContent = '00';
      document.getElementById('cntMin').textContent = '00';
      document.getElementById('cntSec').textContent = '00';
      return;
    }
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    var d = document.getElementById('cntDays');
    var h = document.getElementById('cntHrs');
    var m = document.getElementById('cntMin');
    var s = document.getElementById('cntSec');

    if (d) d.textContent = pad(days);
    if (h) h.textContent = pad(hrs);
    if (m) m.textContent = pad(min);
    if (s) s.textContent = pad(sec);
  }

  update();
  setInterval(update, 1000);
})();


/* ---- Cart Sidebar ---- */
var cartCount = 3;

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('visible');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);


/* ---- Add to Cart ---- */
function addToCart(btn) {
  cartCount++;
  document.getElementById('cartBadge').textContent = cartCount;
  document.getElementById('cartCount').textContent = '(' + cartCount + ')';

  var card = btn.closest('.product-card');
  var name = card.querySelector('.product-name') ? card.querySelector('.product-name').textContent.trim() : 'Item';

  showToast('✅ Added to cart: ' + name.substring(0, 30) + (name.length > 30 ? '…' : ''));
  openCart();
}


/* ---- Wishlist ---- */
document.querySelectorAll('.wishlist-btn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (this.textContent === '♡') {
      this.textContent = '♥';
      this.style.color = '#D82D1A';
      showToast('❤️ Saved to wishlist!');
    } else {
      this.textContent = '♡';
      this.style.color = '';
      showToast('Removed from wishlist.');
    }
  });
});


/* ---- Toast ---- */
var toastTimer;

function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}


/* ---- Mobile Nav ---- */
var mobileBtn = document.getElementById('mobileMenuBtn');
var mainNav = document.getElementById('mainNav');
var navOverlay = document.getElementById('navOverlay');
var navCloseBtn = document.getElementById('navCloseBtn');

function openNav() {
  mainNav.classList.add('open');
  navOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  mainNav.classList.remove('open');
  navOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

if (mobileBtn) mobileBtn.addEventListener('click', openNav);
if (navCloseBtn) navCloseBtn.addEventListener('click', closeNav);
if (navOverlay) navOverlay.addEventListener('click', closeNav);


/* ---- Sticky Header Shadow ---- */
window.addEventListener('scroll', function () {
  var header = document.getElementById('mainHeader');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
  } else {
    header.style.boxShadow = 'none';
  }

  /* Back to top */
  var btt = document.getElementById('backToTop');
  if (window.scrollY > 400) {
    btt.classList.add('visible');
  } else {
    btt.classList.remove('visible');
  }

  /* Scroll reveal */
  revealElements();
});


/* ---- Scroll Reveal ---- */
function revealElements() {
  var items = document.querySelectorAll('.reveal');
  items.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

/* Add reveal class to sections on load */
document.addEventListener('DOMContentLoaded', function () {
  var revealTargets = document.querySelectorAll(
    '.product-card, .trust-item, .promo-tile, .bike-item, .brand-item, .deal-hero-card, .newsletter-inner'
  );
  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });
  revealElements();
});


/* ---- Newsletter ---- */
function subscribeNewsletter(e) {
  e.preventDefault();
  var input = e.target.querySelector('input');
  showToast('🎉 Subscribed! Welcome to the community.');
  input.value = '';
}


/* ---- Search focus ---- */
var searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') this.blur();
  });
}


/* ---- Cart item remove ---- */
document.querySelectorAll('.cart-item-remove').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = this.closest('.cart-item');
    item.style.transition = 'opacity 0.2s';
    item.style.opacity = '0';
    setTimeout(function () {
      item.remove();
      cartCount = Math.max(0, cartCount - 1);
      document.getElementById('cartBadge').textContent = cartCount;
      document.getElementById('cartCount').textContent = '(' + cartCount + ')';
    }, 200);
  });
});


/* ---- Touch swipe for hero ---- */
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  var startX = 0;

  hero.addEventListener('touchstart', function (e) {
    startX = e.changedTouches[0].clientX;
  }, { passive: true });

  hero.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) document.getElementById('slideNext').click();
      else document.getElementById('slidePrev').click();
    }
  }, { passive: true });
})();
