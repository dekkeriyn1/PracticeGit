const btn = document.querySelector('.btn');

const coupon = document.querySelector('.coupon');

btn.addEventListener('click', (e) => {
    coupon.setselectionRange(0, 9999);
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = 'Copied';
});