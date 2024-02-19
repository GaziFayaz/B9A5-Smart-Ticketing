function applyCoupon(){
  code  = document.getElementById("coupon-code").value;
  totalPrice = document.getElementById("total-price").innerText
  if(code === "NEW15"){
    document.getElementById("grand-total").innerText = totalPrice - (totalPrice * 0.15)
    document.getElementById("coupon-area").classList.add("hidden")
  }
  if(code === "Couple 20"){
    document.getElementById("grand-total").innerText = totalPrice - (totalPrice * 0.20)
    document.getElementById("coupon-area").classList.add("hidden")
  }
}