# JS211_address-book

---

## Coding Plan

1. Create a function that will use fetch to "get" new data from the randomuser
   API.

   - This request should request multiple users.
   - The data will need to be stored in an array and saved to a variable. This means we may need to
     drill down into the returned object to get to the level where the data is
     easily accessible.
   - Execute the function outlined in step 2 to build the cards from the users
     fetched.
   - Once the cards are built we can add a button to display the hidden address
     card data that includes things like their address, phone # and email
     address.
   - We need to get the number for the card and button class names that
     are being built in the function in step 2.
   - Now we can add event listener to all of the buttons to toggle the hidden details.
   - **This function will need to be executed each time the page loads.**

2. Create a function that will accept an array of objects and build HTML using the
   insertAdjacentHTML() method.

   - This method should loop through the array of
     objects, and each time it does create the new HTML that will build a user's
     contact card.
   - Fill in the card using template literals that point to data provided in the
     object each time the array is iterated.
   - Make sure to use the index to count the loop so you can use that to
     identify each card as it is created. This # can be used in a class name
     so each card and each button will have the same number in their respective
     class names will have it's own unique class.
