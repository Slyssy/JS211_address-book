'use strict';
// * Store empty variables
let contactArray;
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  //  *Call functions on page load.
  getAddress();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getAddress = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then((res) => res.json())
    .then(
      (address) =>
        address.results.map((contact, index) => {
          const displayUser = document.getElementById('page-container');
          const html = `
    <div id="card-container">
    <div class="contact-header">
      <picture>
        <img src="${
          contact.picture.large
        }" alt="user image" class="user-image" />
      </picture>
      <h1>${contact.name.first} ${contact.name.last}</h1>
      <p>(${contact.gender})</p>
    </div>
    <div class=contact-info card-${index + 1}>
      <h6 class="email">${contact.email}</h6>
      <h6>${contact.phone} (home)</h6>
      <h6>${contact.cell} (cell)</h6>
      <h6>${contact.location.street.number} ${contact.location.street.name}</h6>
      <h6>${contact.location.city}, ${contact.location.state} ${
            contact.location.postcode
          }</h6>
      </div>
    </div>
    </div>
    </div>
    `;
          displayUser.insertAdjacentHTML('afterbegin', html);
        }),
      displayInfo()
    );
};

const displayInfo = (event) => {
  const contactButton = document.querySelectorAll('.btn');
  console.log(contactButton);
  const contactInfo = document.querySelector(`.contact-info`);
  contactButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(button);
    });
  });
};
