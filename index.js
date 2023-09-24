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
      document.getElementById('idContainer').innerText = id;
    })
    .catch(error => {
      // Handle and append the error message to the DOM here
      console.error(error);
    });
}

submitData('John Doe', 'john@example.com');
