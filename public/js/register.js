// sign up button
const signUpButton = document.getElementById('sign-up'); 

signUpButton.addEventListener('click', async (event) => {
    event.preventDefault();

    console.log("the button works");
  
    const email = document.querySelector('#form2Example1').value.trim();
    const password = document.querySelector('#form2Example2').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
      console.log(email);
      console.log(password);
      console.log(response);
    }
  });