function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const jsonData = JSON.stringify(userData);

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: headers,
    body: jsonData
  })
  .then(response => {
    // Handle the response
  })
  .then(data => {
    // Access the converted object
  })
  .then(data => {
    const id = data.id;
    // Append the id to the DOM
  })
  .catch(error => {
    // Handle the error
  })
  .catch(error => {
    const errorMessage = error.message;
    // Append the errorMessage to the DOM
  });
}

module.exports = {
  submitData
};