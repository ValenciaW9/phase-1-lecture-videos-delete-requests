function submitData(name, email) {
  const url = "http://localhost:3000/users";
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
  const body = JSON.stringify({
    name: name,
    email: email
  });

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: body
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // TODO: Find the new id in the data and append it to the DOM
    })
    .catch(function(error) {
      // TODO: Append the error message to the DOM
    });
}

module.exports = {
  submitData
};
Make sure that the submitData function is exported using module.exports.

Now, in your Mocha test file indexTest.js, you can import the submitData function and write the tests:

const { submitData } = require("../index.js");

describe("submitData()", function() {
  // Test 1
  it("makes a POST request to /users with a name and email", function() {
    // TODO: Write the test
  });

  // Test 2
  it("handles a failed POST request using catch, appends the error message to the DOM", function() {
    // TODO: Write the test
  });

  // Test 3
  it("handles the POST request response, retrieves the new id value and appends it to the DOM", function() {
    // TODO: Write the test
  });
});