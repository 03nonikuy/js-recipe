const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const drink1 = document.getElementById("drink1")

let count = 0

plusButton.onclick = function() {
  count += 100

  display.textContent = count
}
