function updateDietaryPreference(value) {
    document.getElementById('DietaryPref').innerText = value === 'None' ? 'have No Dietary Prefrence' : value;
}

function toggleCartStatus(button) {
    var notification = document.getElementById('notification');

    if (button.innerText === 'Add to Cart') {
        // Add to cart logic
        notification.innerText = 'Item added to cart!';
        button.innerText = 'Remove from Cart';
        button.classList.add('in-cart');
        
    } else {
        // Remove from cart logic
        notification.innerText = 'Item removed from cart!';
        button.innerText = 'Add to Cart';
        button.classList.remove('in-cart');
    }

    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.display = 'none';
    }, 2500);
}