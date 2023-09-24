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
    .then(response => {
      if (!response.ok) {
        // If the response is not OK, throw an error
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const id = data.id;
      // Append the ID to the DOM here
    })
    .catch(error => {
      // Handle and append the error message to the DOM here
    });
}
