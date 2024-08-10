// Discount calculation logic
function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const discountPercentage = parseFloat(document.getElementById('discount-percentage').value);

    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
        document.getElementById('discount-result').innerText = "Please enter valid numbers.";
        return;
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;

    document.getElementById('discount-result').innerText = `Discount Amount: $${discountAmount.toFixed(2)} \nFinal Price: $${finalPrice.toFixed(2)}`;
}
