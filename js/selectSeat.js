function changeSeatBackgroundById(id) {
	let seat = document.getElementById(id);
	if (seat.classList.contains("bg-[#0307121A]")) {
		seat.classList.replace("bg-[#0307121A]", "bg-primary");
		seat.classList.replace("text-[#03071280]", "text-white");
	} else {
		seat.classList.replace("bg-primary", "bg-[#0307121A]");
		seat.classList.replace("text-white", "text-[#03071280]");
	}
}

function updatePriceGrid(seatsSelected) {
	const seats = document.getElementsByClassName("seat-grid")[0].children;
	let seatSelected = 0;
	let html = `<div class="seat-row-heading flex gap-1 items-center mb-4">
  <p class="seat-row-heading-text">Seat</p>
  <p
    class="seat-row-heading-number bg-primary px-2 rounded-lg text-white font-bold" id="seat-selected"
  >
    ${seatsSelected}
  </p>
</div>
<div class="mb-4">Class</div>
<div class="mb-4 justify-self-end">Price</div>`;
	for (let i = 0; i < seats.length; i++) {
		if (seats[i].classList.contains("bg-primary")) {
			seatSelected++;
			html =
				html +
				`<div class="seat-code">${seats[i].id}</div>
      <div class="seat-type">Economy</div>
      <div class="seat-price justify-self-end">550</div>`;
		}
	}
	document.getElementById("price-grid").innerHTML = html;
	document.getElementById("total-price").innerText = seatSelected * 550;
	document.getElementById("grand-total").innerText = seatSelected * 550;
	applyCoupon();
}

function selectSeat(id) {
	if (!document.getElementById(id).classList.contains("bg-primary")) {
		const seatLeftElement = document.getElementById("seat-left");
		const seatLeft = seatLeftElement.innerText.split(" ")[0];
		const seatSelectedElement = document.getElementById("seat-selected");
		const seatSelected = seatSelectedElement.innerText;

		// console.log(seatSelected)
		if (seatLeft > 0 && seatSelected < 4) {
			changeSeatBackgroundById(id);
			seatSelectedElement.innerText = parseInt(seatSelected) + 1;
			seatLeftElement.innerText = `${seatLeft - 1} Seats Left`;
			updatePriceGrid(parseInt(seatSelected) + 1);
			document.getElementById("coupon-button").disabled = false;
		}
	} else {
		const seatLeftElement = document.getElementById("seat-left");
		const seatLeft = seatLeftElement.innerText.split(" ")[0];
		const seatSelectedElement = document.getElementById("seat-selected");
		const seatSelected = seatSelectedElement.innerText;
		changeSeatBackgroundById(id);
		seatSelectedElement.innerText = parseInt(seatSelected) - 1;
		seatLeftElement.innerText = `${parseInt(seatLeft) + 1} Seats Left`;
		updatePriceGrid(parseInt(seatSelected) - 1);
		if (parseInt(seatSelected) - 1 == 0) {
			document.getElementById("coupon-button").disabled = true;
			document.getElementById("coupon-area").classList.remove("hidden");
      document.getElementById("coupon-code").value = "";
		}
	}
}
