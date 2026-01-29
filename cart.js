// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Get HTML elements
let cartItems = document.getElementById("cart-items");
let totalPrice = document.getElementById("total-price");

let total = 0;

// Check if cart is empty
if (cart.length === 0) {
  cartItems.innerHTML = `
    <div class="empty-cart">
      <i class="fas fa-shopping-cart"></i>
      <p>Your cart is empty!</p>
      <p style="font-size: 14px; color: #231e1e;">Add some products to get started.</p>
    </div>
  `;
  totalPrice.style.display = "none";
} else {
  // Display each item in the cart
  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.className = "item";
    
    // Create HTML for each cart item
    div.innerHTML = `
      <div class="item-image">
        <img src="${item.image || 'img/products/f1.jpg'}" alt="${item.name}">
      </div>
      <div class="item-details">
        <div class="item-name">${item.name || 'Product'}</div>
        <div class="item-brand">${item.brand || 'Brand'}</div>
      </div>
      <div class="item-price">$${item.price || 0}</div>
      <button class="remove-btn" onclick="removeItem(${index})">
        <i class="fas fa-times"></i>
      </button>
    `;
    
    cartItems.appendChild(div);
    total += parseFloat(item.price) || 0;
  });

  // Display total price
  totalPrice.innerText = "Total: $" + total.toFixed(2);
}

// Remove individual item from cart
function removeItem(index) {
  if (confirm("Remove this item from cart?")) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }
}

// Clear entire cart
function clearCart() {
  if (cart.length === 0) {
    alert("Cart is already empty!");
    return;
  }
  
  if (confirm("Are you sure you want to clear all items from your cart?")) {
    localStorage.removeItem("cart");
    location.reload();
  }
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty! Add some items first.");
    return;
  }
  
  alert("🎉 Thank you for your order!\n\nTotal: $" + total.toFixed(2) + "\n\nThis is a demo - no actual payment will be processed.");
  
  // Clear cart after checkout
  localStorage.removeItem("cart");
  
  // Redirect to home page
  setTimeout(function() {
    window.location.href = "index.html";
  }, 1000);
}

// Update cart count (if you have a cart badge in header)
function updateCartCount() {
  let cartCount = cart.length;
  let cartBadge = document.getElementById("cart-count");
  if (cartBadge) {
    cartBadge.innerText = cartCount;
  }
}

updateCartCount();
