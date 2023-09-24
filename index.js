function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
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
  })
  .catch(function(error) {
    document.body.innerHTML += `<p>Error: ${error.message}</p>`;
  });
}

export default submitData;