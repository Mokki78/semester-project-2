fetch('https://example.com/api/profiles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123'
  })
})
.then(response => response.json())
.then(data => {
  // Handle the response data here
  console.log(data);
})
.catch(error => {
  // Handle any errors here
  console.error('Error:', error);
});

