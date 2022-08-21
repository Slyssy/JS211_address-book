"use strict";
const axios = require("axios").default;
const assert = require("assert");
let contactArray;
const getAddress = () => {
  axios.get("https://randomuser.me/api/?results=1").then(function (response) {
    // handle success
    // console.log(response.data.results);
    contactArray = response.data.results;
    console.log("this is my contact Array:", contactArray);
    return contactArray;
  });
};
console.log(response.data.results.name.first);

if (typeof describe === "function") {
  describe("getAddress()", function () {
    it("should return 2 results", function () {
      getAddress();
      assert.equal(contactArray.length, 1);
    });
    it("should be able to give error if not ok", function () {
      getAddress();
      assert.equal(contactArray.length > 2);
    });
  });
}
