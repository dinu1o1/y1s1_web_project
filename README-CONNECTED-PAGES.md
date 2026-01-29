# E-Commerce Website - Connected Pages Guide

## 📋 Overview
This is a fully connected e-commerce website with the following pages working together:
- **index.html** - Home page with products
- **product-detail.html** - Product detail page
- **cart.html** - Shopping cart page
- **about.html** - About us page
- **blog.html** - Blog page
- **contact.html** - Contact page

## 🔗 How Pages Connect

### 1. **Index Page (index.html)**
**Links to:**
- **Product Images** → Click product image → Goes to `product-detail.html` with product info
- **Cart Icon (shopping cart)** → Adds product to cart and goes to `cart.html`
- **Navigation** → Links to About, Blog, Contact pages
- **Cart Icon in Header** → Goes to `cart.html`

**Features:**
- 16 products with "Add to Cart" functionality
- Each product card is clickable
- When you click product image: Opens product detail page
- When you click cart icon: Adds item to cart

### 2. **Product Detail Page (product-detail.html)**
**How it works:**
- Receives product information from URL parameters
- Shows: Product name, brand, price, image
- Has size selector (XS, S, M, L, XL, XXL)
- Has color selector (5 colors)
- Has quantity selector

**Links to:**
- **"Add to Cart" button** → Adds product to localStorage and shows success message
- **Related Products** → Click to view other products
- **Back to Home** → Breadcrumb navigation
- **Cart in Header** → Goes to `cart.html`

**Example URL:**
```
product-detail.html?id=1&name=Classic Cartoon Style Shirt&brand=adidas&price=60&img=f1.jpg
```

### 3. **Cart Page (cart.html)**
**Features:**
- Shows all items added to cart
- Displays: Product image, name, brand, price
- Shows total price
- Has "Remove" button for each item
- Has "Clear Cart" button
- Has "Continue Shopping" button → Goes back to index.html
- Has "Checkout" button → Completes order

**How it works:**
- Reads cart data from `localStorage`
- Shows empty cart message if no items
- Calculates total automatically
- Cart persists even after page refresh

### 4. **Navigation Between Pages**
All pages have navigation in header:
- **Home** → index.html
- **Shop** → (currently links to #, you can link to shop page)
- **About** → about.html
- **Blog** → blog.html
- **Contact** → contact.html
- **Cart Icon** → cart.html

## 🛒 Shopping Cart System

### How it Works:
1. **Adding to Cart (from Index Page):**
   ```javascript
   Click cart icon → Adds: {name, price, brand, image} → Saves to localStorage
   ```

2. **Adding to Cart (from Product Detail):**
   ```javascript
   Select size, color, quantity → Click "Add to Cart" → Saves with options → Shows alert
   ```

3. **Cart Storage:**
   ```javascript
   localStorage.setItem("cart", JSON.stringify(cartArray))
   ```

4. **View Cart:**
   - Go to cart.html
   - Shows all products with images
   - Calculate total price
   - Option to remove items or clear cart

5. **Checkout:**
   - Click "Proceed to Checkout"
   - Shows order summary
   - Clears cart
   - Redirects to home

## 📁 Required Files

### HTML Files:
- ✅ index.html (home page with products)
- ✅ product-detail.html (product detail page)
- ✅ cart.html (shopping cart)
- ✅ about.html (about page)
- ✅ blog.html (blog page)
- ✅ contact.html (contact page)

### CSS Files:
- style.css (main stylesheet)
- product-detail-style.css (product detail styles)
- about-style.css (about page styles)
- blog-style.css (blog page styles)
- contact-style.css (contact page styles)

### JavaScript Files:
- ✅ script.js (main animations - GSAP, footer typing effect)
- ✅ cart.js (cart functionality)

### Image Directories:
```
img/
├── logo.png
├── products/
│   ├── f1.jpg to f8.jpg (featured products)
│   └── n1.jpg to n8.jpg (new arrivals)
├── features/
│   └── f1.png to f6.png
├── pay/
│   ├── app.jpg
│   ├── play.jpg
│   └── pay.png
└── ... (other images)
```

## 🚀 How to Use

### Setup:
1. Place all HTML files in root directory
2. Place all CSS files in root directory  
3. Place all JS files in root directory
4. Create `img` folder with all product images
5. Open `index.html` in browser

### Testing the Connection:
1. **Open index.html**
2. **Click a product image** → Should open product-detail.html with that product's info
3. **Click a cart icon** → Should add item and can view in cart.html
4. **Go to cart.html** → Should see all added items
5. **Click "Continue Shopping"** → Goes back to index.html
6. **Click "Checkout"** → Completes order and clears cart

### Product Flow:
```
Index Page → Click Product Image → Product Detail Page
           → Select Size/Color/Quantity
           → Click "Add to Cart"
           → View Cart
           → Checkout
           → Back to Index
```

## 🎨 Features

### 1. **Smart Product Cards**
- Clickable product images
- Hover effects
- Quick add to cart button
- Shows brand, name, rating, price

### 2. **Dynamic Product Details**
- URL parameter-based product info
- Size and color selection
- Quantity selector
- Related products
- Product tabs (Description, Specs, Reviews, Shipping)

### 3. **Advanced Cart**
- Product images in cart
- Individual item removal
- Clear all option
- Persistent storage (survives page refresh)
- Checkout functionality
- Empty cart detection

### 4. **Animations**
- GSAP header animation
- Footer typing effect
- Snowflake effect
- Hover animations throughout

## 🔧 Customization

### Add More Products:
In **index.html**, copy a product card and update:
```html
<a href="product-detail.html?id=NEW_ID&name=PRODUCT_NAME&brand=BRAND&price=PRICE&img=IMAGE.jpg">
```

### Change Cart Icon Behavior:
In **index.html**, modify the onclick:
```javascript
onclick="addToCart('Product Name', price, 'brand', 'img/path'); return false;"
```

### Modify Cart Display:
Edit **cart.js** to change how items are displayed

## 💡 Tips

1. **Always use relative paths** for images
2. **Keep localStorage keys consistent** ("cart")
3. **Test in multiple browsers** for compatibility
4. **Clear cache** if cart doesn't update
5. **Use URL parameters** to pass product info to detail page

## 🐛 Troubleshooting

**Cart not showing items:**
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Check cart.js is loading properly

**Product detail not showing correct info:**
- Check URL parameters are correct
- View page source to see script execution
- Console.log the urlParams to debug

**Images not loading:**
- Check image paths are correct
- Ensure img folder structure matches code
- Use browser dev tools network tab

## ✅ Testing Checklist

- [ ] Click product image opens detail page
- [ ] Product detail shows correct information
- [ ] Add to cart from index works
- [ ] Add to cart from detail page works
- [ ] Cart displays all items correctly
- [ ] Total price calculates properly
- [ ] Remove item from cart works
- [ ] Clear cart works
- [ ] Checkout completes and clears cart
- [ ] All navigation links work
- [ ] Cart persists after page refresh

## 📱 Mobile Responsive

All pages are fully responsive:
- Mobile: Single column layout
- Tablet: Adjusted grid layouts
- Desktop: Full multi-column layouts

## 🎯 Future Enhancements

Possible additions:
- User login system
- Payment gateway integration
- Order history
- Product search
- Product filtering
- Wishlist functionality
- Product reviews system
- Email notifications

---

**Made with ❤️ for your e-commerce success!**

