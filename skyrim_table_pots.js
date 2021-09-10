function drawTable() {
  main.innerHTML +=
    `<div class="w3-container">
  <table id="table" class="w3-table-all w3-hoverable">
  <tr class="w3-gray">
    <th id="thname" class="w3-text-white pointer" onclick="orderByName()">Name</th>
    <th id="thprice"  class="w3-text-white pointer" onclick="orderPrice()" >Price</th>
    <th id="thingredient"  class="w3-text-white pointer" onclick="orderByIngredients()" >Ingredients</th>
  </tr>
  
  </table>
  </div>`
}

let orderedByPrice = false
let orderedByName = false
let orderedByIngredients = false

function orderByName() {

  orderedByPrice = false
  orderedByIngredients = false

  if (orderedByName) {
    data.reverse()

  } else {
    // sort by name
    data.sort(function (a, b) {
      var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    orderedByName = true

  }

  updateTable()

}

function orderPrice() {
  orderedByName = false
  orderedByIngredients = false

  if (orderedByPrice) {
    data.reverse()

  } else {
    data.sort((a, b) => a.Price - b.Price)
    orderedByPrice = true
  }

  updateTable()
}

function orderByIngredients() {
  orderedByPrice = false
  orderedByName = false

  if (orderedByIngredients) {
    data.reverse()

  } else {
    // sort by name
    data.sort(function (a, b) {
      var IngredientsA = a.Ingredients[0].toUpperCase(); // ignore upper and lowercase
      var IngredientsB = b.Ingredients[0].toUpperCase(); // ignore upper and lowercase
      if (IngredientsA < IngredientsB) {
        return -1;
      }
      if (IngredientsA > IngredientsB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    orderedByIngredients = true
  }

  updateTable()


}

drawTable()
