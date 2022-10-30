const signInButton = document.getElementById("sign-in");


signInButton.addEventListener('click', async (event) => {
  event.preventDefault();
  console.log("the button works");
    

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(email);
    console.log(password);
  
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(response);
          if (response.ok) {
            document.location.replace('/homepage');
          } else {
            alert('Failed to log in');
          }
        }
      });
      
      