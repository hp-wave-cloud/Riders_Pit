# MotoParts — Bike Parts Store Website

A fully responsive, production-ready motorcycle parts store homepage built with vanilla HTML, CSS, and JavaScript. Styled after Throttlerz.com with a dark red-and-black aesthetic.

## 📁 File Structure

```
motoparts/
├── index.html        ← Main homepage
├── css/
│   └── style.css     ← All styles (responsive, mobile-first)
├── js/
│   └── main.js       ← Slider, cart, countdown, interactions
└── README.md
```

## 🚀 How to Host on GitHub Pages (Free)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it `motoparts` (or your store name)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On your repo page, click **Add file → Upload files**
2. Drag and drop:
   - `index.html`
   - The `css/` folder (with `style.css` inside)
   - The `js/` folder (with `main.js` inside)
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

### Step 5 — Your site is live!
After 1–2 minutes, your site will be at:
```
https://YOUR-GITHUB-USERNAME.github.io/motoparts/
```

---

## 🔧 Customise Before Launching

### Replace placeholder text
Search for these and replace with your real info:

| Placeholder | Replace with |
|------------|--------------|
| `MOTOPARTS` | Your store name |
| `YOUR TAGLINE HERE` | Your tagline |
| `+91 98765 43210` | Your phone number |
| `support@yourstore.in` | Your email |
| `33XXXXX0000X1ZX` | Your GSTIN |
| `Your Store Address` | Your full address |
| `Chennai — 600 0XX` | Your city & PIN |
| `https://wa.me/919876543210` | Your WhatsApp link |

### Replace product emoji with real photos
In `index.html`, find `<div class="product-img">⛑️</div>` and replace the emoji with:
```html
<div class="product-img">
  <img src="images/your-product.jpg" alt="Product Name">
</div>
```

Add this CSS to `style.css` for product images:
```css
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
}
```

### Change colors
In `css/style.css`, find `:root { ... }` at the top and change:
- `--red: #D82D1A` → your brand color

---

## 📱 Features Included

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Hero image slider with touch swipe support
- ✅ Live countdown timer for deals
- ✅ Working slide-out cart sidebar
- ✅ Add to cart with toast notifications
- ✅ Wishlist toggle (heart button)
- ✅ Sticky header with scroll shadow
- ✅ Mobile hamburger menu
- ✅ Marquee announcement bar
- ✅ Scroll reveal animations
- ✅ Back-to-top button
- ✅ WhatsApp floating button
- ✅ Newsletter signup form
- ✅ Mega dropdown menus (desktop)
- ✅ Shop by bike model filter section
- ✅ Featured brands strip
- ✅ GST-ready footer
- ✅ Payment icons (UPI, Razorpay, Visa, COD)

---

## 🛒 Next Steps After Launch

1. **Add real products** → Replace emoji placeholders with product photos
2. **Set up WooCommerce** → For a real cart/checkout, move to WordPress + WooCommerce
3. **Connect Razorpay** → For payment processing
4. **Add Google Analytics** → Paste your GA4 script before `</head>`
5. **Custom domain** → In GitHub Pages settings, add your `.in` or `.com` domain

---

## 🌐 Custom Domain (Optional)

If you buy a domain (e.g. from GoDaddy or Google Domains):
1. In GitHub Pages settings → **Custom domain** → enter `yourstore.in`
2. At your domain registrar, add a CNAME record:
   - Name: `www`
   - Value: `YOUR-GITHUB-USERNAME.github.io`
3. Wait 24 hours for DNS propagation

---

Built with ❤️ in Chennai. Designed for Indian motorcycle retailers.
