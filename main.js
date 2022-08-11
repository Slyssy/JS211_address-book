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
    .then((res) => res.json())
    .then((address) => {
      contactArray = address.results;
      displayContacts(contactArray);
      const contactButton = document.querySelectorAll('.btn');
      console.log(contactButton);
      contactButton.forEach((button) => {
        button.addEventListener('click', (event) => {
          const contactNumber = button.className.split('-')[2];
          const contactInfo = document.querySelector(`.card-${contactNumber}`);
          console.log(contactNumber);
          contactInfo.style.visibility = 'visible';
        });
      });
    })
    .catch((err) => {
      console.log('Error');
      console.log(err);
    });
};

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
