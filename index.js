submitData('John Doe', 'john@example.com');

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

// Test 1
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the data here
  })
  .catch(error => {
    console.error(error);
  });

// Test 2
function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Network response was not OK');
  }
  return response.json();
}

fetch('http://localhost:3000/users')
  .then(handleResponse)
  .then(data => {
    console.log(data); // Process the data here
  })
  .catch(error => {
    console.error(error);
  });

// Test 3
async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data); // Process the data here
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// Test 4
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    // Process the data here
    const userList = document.getElementById("user-list");
    data.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);
  });

// Rest of the code...