const shopcard = document.querySelector(".shopcard")
console.log(shopcard);

function open_shop() {
  shopcard.style.display = "grid"
  shopcard.style.top = "50px"
}
function close_shop() {
  shopcard.style.display = "grid"
  shopcard.style.top = "-450px"

}