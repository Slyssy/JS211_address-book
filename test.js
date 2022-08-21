"use strict";
const axios = require("axios").default;
const assert = require("assert");
let contactArray;
const getAddress = () => {
  axios
    .get("https://randomuser.me/api/?results=1")
    .then(function (response) {
      console.log(response.data.results);
      contactArray = response.data.results;
      console.log("this is my contact Array:", contactArray);
      return contactArray;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  // .then(function () {
  //   // always executed
  // });
};
console.log(response.data.results.name.first);

if (typeof describe === "function") {
  describe("getAddress()", function () {
    it("should return 1 result", function () {
      getAddress();
      assert.equal(contactArray.length, 1);
    });
    it("should be able to give error if not ok", function () {
      getAddress();
      assert.equal(contactArray.length > 1);
    });
    it("should return error if can't GET data ie wrong API key", function () {
      getAddress();
      assert.equal(contactArray, "error");
    });
    it("should be able to give error", function () {
      getAddress();
      assert.equal(contactArray);
    });
    it("should be able to ", function () {
      getAddress();
      assert.equal(contactArray.length > 2);
    });
  });
}
