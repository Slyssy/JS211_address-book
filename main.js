'use strict';
// * Store empty variables
let contactArray;
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  //  *Call functions on page load.
  getAddress();
};

// This function is going to make a fetch request to the URL inside its
// parameter brackets (). Then it will turn the response (data it's getting
// back), saved here as res. In the promise will execute the code to display the
// html based on the data that is saved in the contact array variable by calling
// the display
const getAddress = () => {
  fetch('https://randomuser.me/api/?results=200')
    // * Promise to once the route is executed to take the response and convert
    // * it to a JSON.
    .then((res) => res.json())
    // * Promise to parse the results, and put the required data into a variable
    // * so it can be manipulated to update the HTML
    .then((address) => {
      // * Saving the results we want to use to a variable.
      contactArray = address.results;
      // * Calling the displayContacts() function that is accepting the
      // *  contactArray as an argument. This builds the HTML
      displayContacts(contactArray);
      // * Now that the HTML has been built we can select HTML elements. We are
      // * the selecting the button.
      const contactButton = document.querySelectorAll('.btn');
      // * Adding an event listener to all of the buttons.
      contactButton.forEach((button) => {
        button.addEventListener('click', (event) => {
          // * The buttons all use the index from when they are created in the
          // *  map loop so they can be identified. We are grabbing that number
          // *  so we can link that button's functions to the card it is
          // *  associated with because we did the same thing for each card.
          const contactNumber = button.className.split('-')[2];
          // * Using the button's class # to match it to the contact card.
          const contactInfo = document.querySelector(`.card-${contactNumber}`);
          // console.log(contactNumber);
          // * Toggling teh visible class and changing the button's words on
          // *  each click.
          contactInfo.classList.toggle('visible');
          // * Using contact info classList.value to see if the word 'visible
          // *  included.
          if (contactInfo.classList.value.includes('visible')) {
            button.innerHTML = 'Show Less';
          } else {
            button.innerHTML = 'Show More';
          }
        });
      });
    })
    .catch((err) => {
      console.log('Error');
      console.log(err);
    });
};

// # Function to display the contacts. This will accept an array of objects and will weill create new HTML using insertAdjacentHTML and string object literals and drilling down into each object as we iterate over the array of objects.
const displayContacts = (array) => {
  array.map((contact, index) => {
    const displayUser = document.getElementById('page-container');
    const html = `
    <div id="card-container">
    <div class="contact-header">
      <picture>
        <img src="${
          contact.picture.large
        }" alt="user image" class="user-image" />
      </picture>
      <h2>${contact.name.first} ${contact.name.last}</h2>
      <p>(${contact.gender})</p>
    </div>
    <div class="contact-info card-${index + 1}">
      <h6 class="email">${contact.email}</h6>
      <h6>${contact.phone} (home)</h6>
      <h6>${contact.cell} (cell)</h6>
      <h6>${contact.location.street.number} ${contact.location.street.name}</h6>
      <h6>${contact.location.city}, ${contact.location.state} ${
      contact.location.postcode
    }</h6>
      </div>
      <button class="btn contact-button-${index + 1}">Show More</button>  

    </div>
    </div>
    </div>
    `;
    displayUser.insertAdjacentHTML('afterbegin', html);
  });
};
