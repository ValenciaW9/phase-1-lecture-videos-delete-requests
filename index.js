function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      // Append the ID to the DOM here
    })
    .catch(error => {
      // Handle and append the error message to the DOM here
    });
}

function submitData() {
  let formData = {
    // your form data here
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://example.com/api/endpoint", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let newId = data.id;
      // Append the newId to the DOM
      document.getElementById("idContainer").innerText = newId;
    });
}
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the data here
  })
  .catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error.message;
    document.getElementById('error-container').appendChild(errorMessage);
  });
  function submitData(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        // Handle the response data
        console.log(json);
      })
      .catch(error => {
        // Handle any errors
        console.log(error);
      });
  }
