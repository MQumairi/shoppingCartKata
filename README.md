Good evening,

Attached is my solution to the "Shopping Master" coding Kata.



//HIGH LEVEL OVERVIEW

Under each item listed ("A", "B", "C", or "D"), is an "Add to Cart" button. Pressing this button will add the item to a list in the cart below.

NOTICE: the list is initially empty ("Cart is Empty!"). Simply add a first item to make the list appear.

The total price of the items in the cart will be updated accordingly upon adding an item. The total price takes into consideration any offers assigned to the particular item.

Clicking on the "Buy Now" button will simulate a purchase; displaying an alert, emptying the cart, and reseting the total price.



//DETAILS IN THE CODE

The page design limits itself to Bootstrap 4 default components to save development time. The purchasable items were arranged using a Bootstrap grid.

In the JavaScript, an eventListener is attached to each "Add to Cart Button" button. The listener calls the addToCartList() function upon the clicking of the button.

The addToCartList function holds most of the page's logic. The function takes a string in as an argument. The inputted string equals the name of the corresponding item (e.g. "A" will be passed into the function, if the "Add to Cart" button below "A" is clicked). The function then adds the item to the list in the cart below, and increments the price accordingly.

For items "A" and "B", tracker variables were initialized. This is because every third "A" item costs only £30 (instead of the regular £50), and every second "B" item costs only £7 (instead of the regular £30). The trackers count to the third "A" and second "B", so that the price is incremented correctly when the tracker reaches its mark. When the tracker reaches its mark, it then resets again, so that the user is charged a full price for the next "A" or "B" item.



//WHAT I WOULD LIKE TO HAVE ADDED

I assumed that the focus on this small project was the logic of the code, so I spent no time designing the page. Given more time, and more explicit instructions demanding this, I believe I could have made the page look better.
