function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST', // Add the method property to specify it as a POST request
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.body.innerHTML += `<p>User ID: ${data.id}</p>`;
    return data; // Return the data for the next `then` block
  })
  .catch(function(error) {
    document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    throw error; // Rethrow the error for the next `catch` block
  });
}

export default submitData;