function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function fillTable() {
  let table = document.querySelector('#table')

  data.forEach(pot => {

    pot.Ingredients.sort(function (a, b) {
      var IngredientsA = a.toUpperCase(); // ignore upper and lowercase
      var IngredientsB = b.toUpperCase(); // ignore upper and lowercase
      if (IngredientsA < IngredientsB) {
        return -1;
      }
      if (IngredientsA > IngredientsB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    table.innerHTML += `
    <tr id=potion${data.indexOf(pot)}>
      <td>${pot.Name}</td>
      <td>${pot.Price}</td>
      <td>${pot.Ingredients}</td>
    </tr>
  `
  });

}

function updateTable() {
  let table = document.querySelector('#table')

  table.innerHTML =
    `
  <tr class="w3-gray">
  <th id="thname" class="w3-text-white pointer" onclick="orderByName()">Name</th>
  <th id="thprice"  class="w3-text-white pointer" onclick="orderPrice()" >Price</th>
  <th id="thingredient"  class="w3-text-white pointer" onclick="orderByIngredients()" >Ingredients</th>
  </tr>
  
  `

  data.forEach(pot => {
    table.innerHTML += `

    <tr id=potion${data.indexOf(pot)}>
      <td>${pot.Name}</td>
      <td>${pot.Price}</td>
      <td>${pot.Ingredients}</td>
    </tr>

  `
  });

  hideRowes()

}

fillTable()


function hideRowes() {

  let text = document.querySelector('#searchField').value

  data.map((pot, index) => {
    let elemet = document.querySelector(`#potion${index}`)
    let ingredients = pot.Ingredients.join(', ')
    let ingre_include = !ingredients.includes(text)
    let name_include = !pot.Name.includes(text)
    if (ingre_include && name_include) {
      elemet.style = "visibility:collapse"
    } else {
      elemet.style = "visibility:visible"
    }
  })

}


docReady(function () {
  // DOM is loaded and ready for manipulation here

  let searchField = document.querySelector('#searchField')

  searchField.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      hideRowes()
    }
  });

  searchField.focus()

});