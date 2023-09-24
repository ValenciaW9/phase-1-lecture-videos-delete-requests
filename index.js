const url = "http://localhost:3000/users";
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
  const body = JSON.stringify({
    name: name,
    email: email
  });

  // TODO: Write the fetch() request

}

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
  });
}

unction submitData(name, email) {
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

unction submitData(name, email) {
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