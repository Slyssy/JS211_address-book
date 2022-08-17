"use strict";
const axios = require("axios").default;
const assert = require("assert");
let contactArray;
const getAddress = () => {
  axios
    .get("https://randomuser.me/api/?results=2")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((address) => {
      contactArray = address.results;
    });
};
if (typeof describe === "function") {
  describe("getAddress()", () => {
    it("should return 5 results", () => {
      getAddress();
      assert.equal(address.results.length, 2);
    });
    it("should be able to give error if not ok", () => {
      getAddress();
      assert.equal(address.results.length > 2);
    });
    // it("should be able to test if the wrong IP address is entered", () => {
    //   address();
    //   assert.equal(, "You guessed it!");
    // });

    // it("should be able to identify typeof is a string", () => {
    //   getAddress();
    //   assert.equal(address.results.firstName.typeof, string);
    // });

    // it("should be able to detect a win", () => {
    //   assert.equal(mastermind(solution), "You guessed it!");
    // });

    // it("should be able to detect a win", () => {
    //   assert.equal(mastermind(solution), "You guessed it!");
    // });
  });
}
// } else {
//   getPrompt();
// }

//     .then(function (response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
// };

// let contactArray;

// const getAddress = () => {
//   fetch("https://randomuser.me/api/?results=5")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((address) => {
//       contactArray = address.results;
//     }}
