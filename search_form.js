let main = document.querySelector('#root')

function drawForm() {
  main.innerHTML +=
    `<div class="w3-gray search-bar w3-card-4 w3-round-xlarge">
  <label class="w3-text-white" ><b>Search</b></label>
  <input id="searchField" class="w3-input" type="text" >
  <span class="warning">* Just type the ingredient or potion name and press Enter<span>
  </div>`

}

drawForm()

