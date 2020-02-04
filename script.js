//The four 'add to cart' buttons
var addAButton = document.getElementById("addA");
var addBButton = document.getElementById("addB");
var addCButton = document.getElementById("addC");
var addDButton = document.getElementById("addD");

//The list of cart items
var cartList = "";
var cartListDisplay = document.getElementById("cartList");
var cartTitle = document.getElementById("cartListTitle");

//Pricing
var price = 0;
var aTracker = 0; //tracks for the third A item
var bTracker = 0; //tracks for the second B item
var priceDisplay = document.getElementById("totalPrice");

//Purchase 'reset' Button
var reset = document.getElementById("reset");


//Click listners for the four buttons
addAButton.addEventListener("click", function(){
  addToCartList("A");
})

addBButton.addEventListener("click", function(){
  addToCartList("B");
})

addCButton.addEventListener("click", function(){
  addToCartList("C");
})

addDButton.addEventListener("click", function(){
  addToCartList("D");
})


//Add items to cartList, add each item to cartListDisplay, increment price accordingly.

function addToCartList(input) {
  cartTitle.textContent = "Currently in cart: "
  cartList = cartList.concat(input + " ");
  cartListDisplay.textContent = cartList;

  if (input === "A") {

    //If you're on your third A item, the next one will increment price by 30, then reset aTracker.
    if(aTracker === 2) {
      price +=30;
      aTracker = 0;

    }
    //Else, increment price by A's regular price, then increment A-tracker.
    else {
      price += 50;
      aTracker+=1;
    }

  }

  else if (input === "B") {

    //If you're on your second B item, the next one will increment price by 7, then reset bTracker.
    if(bTracker === 1) {
      price +=7;
      bTracker = 0;

    }
    //Else, increment price by B's regular price, then increment B-tracker.
    else {
      price += 30;
      bTracker+=1;
    }
  }

  else if (input === "C") {
    price += 20;
  }

  else {
    price += 10;
  }

  priceDisplay.textContent = String(price);

}


//Listner for reset button
reset.addEventListener("click", function(){
  if (price === 0) {
    alert("Error: Cart is empty!")
  } else {
    alert("Thank you for your purchase! Your cart has been emptied.")
  }

  //Reset pricing
  price = 0;
  priceDisplay.textContent = String(price);

  //Reset the two trackers
  aTracker = 0;
  bTracker = 0;

  //Clear Cart List
  cartTitle.textContent = "Cart is Empty!"
  cartList = "";
  cartListDisplay.textContent = cartList;
})
