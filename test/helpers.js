export async function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const jsonData = JSON.stringify(userData);

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: headers,
      body: jsonData
    });

    const data = await response.json();

    const id = data.id;

    // Append the id to the DOM

  } catch (error) {
    const errorMessage = error.message;

    // Append the errorMessage to the DOM
  }
}