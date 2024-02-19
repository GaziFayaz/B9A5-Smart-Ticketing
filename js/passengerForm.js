function checkPassenger(){
  if (document.getElementById("passenger-name").value && document.getElementById("passenger-phone") && document.getElementById("seat-selected").innerText > 0){
    document.getElementById("my_modal_1").showModal()
  }
}

function closeModal(){
  document.getElementById("my_modal_1").closeModal()
}